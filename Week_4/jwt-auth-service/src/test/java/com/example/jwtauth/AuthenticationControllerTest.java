package com.example.jwtauth;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class AuthenticationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void authenticate_withValidCredentials_returnsJwt() throws Exception {
        mockMvc.perform(get("/authenticate")
                        .with(SecurityMockMvcRequestPostProcessors.httpBasic("user", "pwd")))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").exists());
    }

    @Test
    void authenticate_withInvalidCredentials_returns401() throws Exception {
        mockMvc.perform(get("/authenticate")
                        .with(SecurityMockMvcRequestPostProcessors.httpBasic("user", "wrongpwd")))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void authenticate_withNoCredentials_returns401() throws Exception {
        mockMvc.perform(get("/authenticate"))
                .andExpect(status().isUnauthorized());
    }
}
