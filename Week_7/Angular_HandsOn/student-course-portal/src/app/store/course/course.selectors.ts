import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

/**
 * Course Selectors - Hands-On 9, Task 1, Step 95
 * Selectors are memoized - they only recompute when their inputs change.
 * This is NgRx's key performance optimization.
 */

// Feature selector - selects the course slice of state
export const selectCourseState = createFeatureSelector<CourseState>('course');

// Select all courses
export const selectAllCourses = createSelector(
  selectCourseState,
  (state) => state.courses
);

// Select loading state
export const selectCoursesLoading = createSelector(
  selectCourseState,
  (state) => state.loading
);

// Select error state
export const selectCoursesError = createSelector(
  selectCourseState,
  (state) => state.error
);

// Select course by ID (parameterized selector)
export const selectCourseById = (courseId: number) => createSelector(
  selectAllCourses,
  (courses) => courses.find(c => c.id === courseId)
);
