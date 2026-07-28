import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

/**
 * Course Actions - Hands-On 9, Task 1, Step 93
 * Actions follow NgRx convention: '[Feature] Action Description'
 * This makes Redux DevTools timeline readable and filterable.
 */

// Load courses (triggered by component)
export const loadCourses = createAction('[Course] Load Courses');

// Load courses success (dispatched by effect after HTTP success)
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

// Load courses failure (dispatched by effect after HTTP error)
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
