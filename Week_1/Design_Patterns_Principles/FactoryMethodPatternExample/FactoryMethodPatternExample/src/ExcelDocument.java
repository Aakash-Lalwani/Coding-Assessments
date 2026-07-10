/**
 * ExcelDocument - Concrete class for Microsoft Excel spreadsheet documents.
 */
public class ExcelDocument implements Document {

    public void open() {
        System.out.println("[ExcelDocument] Opening Excel document (.xlsx)...");
    }

    public void save() {
        System.out.println("[ExcelDocument] Saving Excel document (.xlsx)...");
    }

    public void close() {
        System.out.println("[ExcelDocument] Closing Excel document.");
    }
}
