public class FinanceForecaster {

  
    public static double calcFutureValue(double balance, double rate, int years) {
        
        if (years == 0) {
            return balance;
        }
       
        return calcFutureValue(balance * (1 + rate), rate, years - 1);
    }

   
    public static double optimizedFutureValue(double balance, double rate, int years) {
        return balance * power(1 + rate, years);
    }

    private static double power(double base, int exp) {
        if (exp == 0) return 1.0;
        
        double half = power(base, exp / 2);
        
        if (exp % 2 == 0) {
            return half * half;
        } else {
            return base * half * half;
        }
    }

    public static void main(String[] args) {
        double startAmount = 10000.00; 
        double growth = 0.05;          
        int years = 10;              

        System.out.println("--- Normal Recursion ---");
        double fv1 = calcFutureValue(startAmount, growth, years);
        System.out.printf("Value after 10 years: $%.2f%n", fv1);

        System.out.println("\n--- Optimized ---");
        double fv2 = optimizedFutureValue(startAmount, growth, years);
        System.out.printf("Value after 10 years: $%.2f%n", fv2);
    }
}
