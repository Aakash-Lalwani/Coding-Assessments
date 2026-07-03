import java.util.Arrays;

class Product implements Comparable<Product> {
    private int productId;
    private String productName;
    private String category;

    public Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }

    @Override
    public String toString() {
        return "ID: " + productId + " | " + productName + " (" + category + ")";
    }

    // We need this so Arrays.sort() knows how to order the products
    @Override
    public int compareTo(Product other) {
        return Integer.compare(this.productId, other.productId);
    }
}

public class StoreSearch {

    // Basic linear search - checks one by one
    public static Product linearSearch(Product[] arr, int targetId) {
        for (Product p : arr) {
            if (p.getProductId() == targetId) {
                return p; 
            }
        }
        return null; 
    }

    // Binary search - much faster but needs sorted array
    public static Product binarySearch(Product[] arr, int targetId) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midId = arr[mid].getProductId();

            if (midId == targetId) {
                return arr[mid]; 
            } else if (midId < targetId) {
                left = mid + 1; 
            } else {
                right = mid - 1; 
            }
        }
        return null; 
    }

    public static void main(String[] args) {
        Product[] inventory = {
            new Product(105, "Wireless Mouse", "Electronics"),
            new Product(101, "Mechanical Keyboard", "Electronics"),
            new Product(109, "Desk Lamp", "Home"),
            new Product(102, "Coffee Mug", "Kitchen"),
            new Product(107, "Ergonomic Chair", "Furniture")
        };

        System.out.println("--- Testing Linear Search ---");
        Product p1 = linearSearch(inventory, 109);
        System.out.println("Found (109): " + (p1 != null ? p1 : "Not Found"));

        System.out.println("\n--- Testing Binary Search ---");
        Arrays.sort(inventory); 
        System.out.println("(Sorted the array first)");
        
        Product p2 = binarySearch(inventory, 107);
        System.out.println("Found (107): " + (p2 != null ? p2 : "Not Found"));
    }
}