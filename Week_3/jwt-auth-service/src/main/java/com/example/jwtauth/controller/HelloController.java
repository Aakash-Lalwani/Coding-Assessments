package com.example.jwtauth.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Protected sample endpoint. Requires: Authorization: Bearer <jwt>
 * Used to prove the token issued by /authenticate is actually honored.
 */
@RestController
public class HelloController {

    @GetMapping("/hello")
    public Map<String, String> hello(@AuthenticationPrincipal UserDetails userDetails) {
        return Map.of("message", "Hello, " + userDetails.getUsername() + "! Your JWT is valid.");
    }
}
