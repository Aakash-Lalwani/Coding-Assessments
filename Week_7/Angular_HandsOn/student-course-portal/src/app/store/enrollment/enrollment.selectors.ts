import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';
import { Course } from '../../models/course.model';

/**
 * Enrollment Selectors - Hands-On 9, Task 2, Step 99
 * Cross-slice selector combines course and enrollment state to derive enrolled courses.
 */

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

// Select enrolled course IDs
export const selectEnrolledIds = createSelector(
  selectEnrollmentState,
  (state) => state.enrolledCourseIds
);

// Cross-slice selector: combines course state + enrollment state
// Returns full Course objects for enrolled IDs
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses: Course[], enrolledIds: number[]) =>
    courses.filter(course => enrolledIds.includes(course.id))
);

// Check if a specific course is enrolled
export const selectIsEnrolled = (courseId: number) => createSelector(
  selectEnrolledIds,
  (ids) => ids.includes(courseId)
);
