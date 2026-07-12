/**
 * SingletonTest - Test class for the Logger Singleton Pattern
 *
 * Demonstrates that only ONE instance of Logger is ever created,
 * regardless of how many times getInstance() is called.
 */
public class SingletonTest {

    public static void main(String[] args) {

        System.out.println("=== Singleton Pattern Test ===\n");

        // Obtain first reference to Logger
        Logger logger1 = Logger.getInstance();
        logger1.log("Application started.");

        // Obtain second reference to Logger
        Logger logger2 = Logger.getInstance();
        logger2.warn("Low memory warning.");

        // Obtain third reference to Logger
        Logger logger3 = Logger.getInstance();
        logger3.error("Null pointer encountered.");

        System.out.println();

        // Verify all references point to the same instance
        System.out.println("--- Instance Verification ---");
        System.out.println("logger1 == logger2 : " + (logger1 == logger2));
        System.out.println("logger2 == logger3 : " + (logger2 == logger3));
        System.out.println("logger1 == logger3 : " + (logger1 == logger3));

        System.out.println();
        System.out.println("logger1 hashCode: " + logger1.hashCode());
        System.out.println("logger2 hashCode: " + logger2.hashCode());
        System.out.println("logger3 hashCode: " + logger3.hashCode());

        System.out.println();
        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("SUCCESS: All references point to the SAME Logger instance.");
            System.out.println("Singleton Pattern is working correctly!");
        } else {
            System.out.println("FAILURE: Multiple Logger instances detected.");
        }
    }
}
