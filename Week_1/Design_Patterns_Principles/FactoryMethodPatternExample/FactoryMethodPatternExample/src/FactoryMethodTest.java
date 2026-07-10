/**
 * FactoryMethodTest - Demonstrates the Factory Method Pattern.
 *
 * The client code talks only to DocumentFactory and Document interfaces.
 * The exact type of document created is determined by the concrete factory,
 * keeping the client fully decoupled from concrete document classes.
 */
public class FactoryMethodTest {

    public static void main(String[] args) {

        System.out.println("=== Factory Method Pattern Test ===\n");

        // --- Word Document ---
        System.out.println(">>> Creating and processing a Word document:");
        DocumentFactory wordFactory = new WordDocumentFactory();
        wordFactory.processDocument();

        System.out.println();

        // --- PDF Document ---
        System.out.println(">>> Creating and processing a PDF document:");
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        pdfFactory.processDocument();

        System.out.println();

        // --- Excel Document ---
        System.out.println(">>> Creating and processing an Excel document:");
        DocumentFactory excelFactory = new ExcelDocumentFactory();
        excelFactory.processDocument();

        System.out.println();

        // --- Direct factory method usage ---
        System.out.println("--- Direct createDocument() usage ---");
        Document doc = new PdfDocumentFactory().createDocument();
        doc.open();
        doc.save();
        doc.close();

        System.out.println();
        System.out.println("SUCCESS: All document types created via Factory Method Pattern.");
    }
}
