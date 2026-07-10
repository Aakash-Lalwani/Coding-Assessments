/**
 * PdfDocument - Concrete class for PDF documents.
 */
public class PdfDocument implements Document {

    public void open() {
        System.out.println("[PdfDocument]  Opening PDF document (.pdf)...");
    }

    public void save() {
        System.out.println("[PdfDocument]  Saving PDF document (.pdf)...");
    }

    public void close() {
        System.out.println("[PdfDocument]  Closing PDF document.");
    }
}
