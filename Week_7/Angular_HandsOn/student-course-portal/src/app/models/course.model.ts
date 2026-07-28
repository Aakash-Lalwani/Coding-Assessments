/**
 * Course model interface for type-safe course data across the application.
 * Defined in Hands-On 6, Task 1, Step 59.
 */
export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}
