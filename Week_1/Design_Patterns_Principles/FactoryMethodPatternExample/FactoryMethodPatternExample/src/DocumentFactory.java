/**
 * DocumentFactory - Abstract Factory class (Factory Method Pattern).
 *
 * Declares the factory method createDocument() which subclasses must
 * override to produce a specific type of Document.
 *
 * Also provides a template method processDocument() to demonstrate
 * how the factory method is used by the abstract class itself.
 */
public abstract class DocumentFactory {

    // Factory Method — subclasses decide which Document to instantiate
    public abstract Document createDocument();

    // Template method — uses the factory method internally
    public void processDocument() {
        Document doc = createDocument();
        doc.open();
        doc.save();
        doc.close();
    }
}
