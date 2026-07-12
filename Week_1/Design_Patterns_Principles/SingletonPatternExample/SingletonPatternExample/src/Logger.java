/**
 * Logger - Singleton Design Pattern Implementation
 *
 * Ensures only one instance of Logger exists throughout
 * the application lifecycle.
 */
public class Logger {

    // Step 1: Private static instance — holds the single instance
    private static Logger instance;

    // Step 2: Private constructor — prevents external instantiation
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Step 3: Public static method — returns the single instance (lazy init)
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Logging methods
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }

    public void warn(String message) {
        System.out.println("[WARN] " + message);
    }

    public void error(String message) {
        System.out.println("[ERROR] " + message);
    }
}
