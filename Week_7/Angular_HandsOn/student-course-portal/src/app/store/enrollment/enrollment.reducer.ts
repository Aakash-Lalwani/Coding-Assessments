import { createReducer, on } from '@ngrx/store';
import * as EnrollmentActions from './enrollment.actions';

/**
 * Enrollment State - Hands-On 9, Task 2, Step 99
 */
export interface EnrollmentState {
  enrolledCourseIds: number[];
}

export const initialEnrollmentState: EnrollmentState = {
  enrolledCourseIds: []
};

/**
 * Enrollment Reducer - Pure function handling enrollment state changes
 */
export const enrollmentReducer = createReducer(
  initialEnrollmentState,

  on(EnrollmentActions.enrollInCourse, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.includes(courseId)
      ? state.enrolledCourseIds
      : [...state.enrolledCourseIds, courseId]
  })),

  on(EnrollmentActions.unenrollFromCourse, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.filter(id => id !== courseId)
  })),

  on(EnrollmentActions.setEnrolledCourses, (state, { courseIds }) => ({
    ...state,
    enrolledCourseIds: courseIds
  }))
);
