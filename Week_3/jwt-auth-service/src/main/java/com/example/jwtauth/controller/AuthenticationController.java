package com.example.jwtauth.controller;

import com.example.jwtauth.model.AuthenticationResponse;
import com.example.jwtauth.service.JwtUtil;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

/**
 * Step 2 + 3 of the assignment.
 *
 * Handles: curl -s -u user:pwd http://localhost:8090/authenticate
 *
 * curl's -u option sends credentials as an HTTP Basic "Authorization" header:
 *   Authorization: Basic base64(username:password)
 *
 * This controller reads that header itself (rather than relying on Spring
 * Security's built-in httpBasic() support), decodes the username/password,
 * authenticates them, and returns a signed JWT.
 */
@RestController
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;

    public AuthenticationController(AuthenticationManager authenticationManager,
                                     UserDetailsService userDetailsService,
                                     JwtUtil jwtUtil) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(
            @org.springframework.web.bind.annotation.RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false)
            String authorizationHeader) {

        if (authorizationHeader == null || !authorizationHeader.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .header(HttpHeaders.WWW_AUTHENTICATE, "Basic realm=\"jwt-auth-service\"")
                    .body("Missing or malformed Authorization header. Expected 'Basic <base64(user:pwd)>'.");
        }

        // --- Step 2: decode the username and password from the header ---
        String base64Credentials = authorizationHeader.substring("Basic ".length()).trim();
        String decoded = new String(Base64.getDecoder().decode(base64Credentials), StandardCharsets.UTF_8);

        int separatorIndex = decoded.indexOf(':');
        if (separatorIndex < 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Invalid Basic auth payload; expected 'username:password'.");
        }

        String username = decoded.substring(0, separatorIndex);
        String password = decoded.substring(separatorIndex + 1);

        // --- Validate credentials against the configured UserDetailsService ---
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid username or password.");
        }

        // --- Step 3: generate the token for the authenticated user ---
        final UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
