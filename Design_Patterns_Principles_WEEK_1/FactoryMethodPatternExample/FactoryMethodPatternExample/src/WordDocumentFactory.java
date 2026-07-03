/**
 * WordDocumentFactory - Concrete factory for creating WordDocument objects.
 */
public class WordDocumentFactory extends DocumentFactory {

    public Document createDocument() {
        System.out.println("WordDocumentFactory: Creating a Word document...");
        return new WordDocument();
    }
}
