package com.sudip;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class MyServiceTest {

    @Mock
    private ExternalApi mockApi;

    private MyService service;

    @BeforeEach
    public void setUp() {
        service = new MyService(mockApi);
    }

    @Test
    public void testFetchDataSuccess() {
        // Arrange
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act
        String result = service.fetchData();

        // Assert
        assertEquals("Mock Data", result, "Should return mocked data");
        verify(mockApi, times(1)).getData();
    }

    @Test
    public void testFetchDataNullResponse() {
        // Arrange
        when(mockApi.getData()).thenReturn(null);

        // Act
        String result = service.fetchData();

        // Assert
        assertEquals("No data available", result, "Should handle null response");
        verify(mockApi, times(1)).getData();
    }

    @Test
    public void testFetchDataThrowsRuntimeException() {
        // Arrange
        RuntimeException exception = new RuntimeException("API failure");
        when(mockApi.getData()).thenThrow(exception);

        // Act & Assert
        RuntimeException thrown =
                assertThrows(RuntimeException.class, service::fetchData);

        assertSame(exception, thrown, "Should throw the same RuntimeException object");
        assertEquals("API failure", thrown.getMessage());

        verify(mockApi, times(1)).getData();
    }
}