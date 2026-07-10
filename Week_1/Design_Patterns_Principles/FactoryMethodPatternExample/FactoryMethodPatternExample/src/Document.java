/**
 * Document - Common interface for all document types.
 * Every concrete document must implement open(), save(), and close().
 */
public interface Document {
    void open();
    void save();
    void close();
}
