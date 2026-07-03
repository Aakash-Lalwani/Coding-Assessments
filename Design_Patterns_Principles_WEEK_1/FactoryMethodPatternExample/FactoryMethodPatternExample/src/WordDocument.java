/**
 * WordDocument - Concrete class for Microsoft Word documents.
 */
public class WordDocument implements Document {

    @Override
    public void open() {
        System.out.println("[WordDocument] Opening Word document (.docx)...");
    }

    @Override
    public void save() {
        System.out.println("[WordDocument] Saving Word document (.docx)...");
    }

    @Override
    public void close() {
        System.out.println("[WordDocument] Closing Word document.");
    }
}
