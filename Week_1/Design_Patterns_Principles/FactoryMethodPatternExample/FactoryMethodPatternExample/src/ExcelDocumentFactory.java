/**
 * ExcelDocumentFactory - Concrete factory for creating ExcelDocument objects.
 */
public class ExcelDocumentFactory extends DocumentFactory {

    public Document createDocument() {
        System.out.println("ExcelDocumentFactory: Creating an Excel document...");
        return new ExcelDocument();
    }
}
