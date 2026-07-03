/**
 * PdfDocumentFactory - Concrete factory for creating PdfDocument objects.
 */
public class PdfDocumentFactory extends DocumentFactory {

    public Document createDocument() {
        System.out.println("PdfDocumentFactory:  Creating a PDF document...");
        return new PdfDocument();
    }
}
