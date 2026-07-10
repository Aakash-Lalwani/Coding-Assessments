package com.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
    }

    @AfterEach
    public void tearDown() {
        calculator = null;
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 5;
        int b = 3;
        int expected = 8;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(expected, result, "Adding " + a + " and " + b + " should equal " + expected);
    }

    @Test
    public void testSubtract() {
        // Arrange
        int a = 5;
        int b = 3;
        int expected = 2;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(expected, result, "Subtracting " + b + " from " + a + " should equal " + expected);
    }

    @Test
    public void testDivide() {
        // Arrange
        double a = 6.0;
        double b = 2.0;
        double expected = 3.0;

        // Act
        double result = calculator.divide(a, b);

        // Assert
        assertEquals(expected, result, 0.0001, "Dividing " + a + " by " + b + " should equal " + expected);
    }

    @Test
    public void testDivideByZero() {
        // Arrange
        double a = 5.0;
        double b = 0.0;

        // Act & Assert
        assertThrows(ArithmeticException.class, () -> calculator.divide(a, b),
                "Dividing " + a + " by " + b + " should throw ArithmeticException");
    }
}