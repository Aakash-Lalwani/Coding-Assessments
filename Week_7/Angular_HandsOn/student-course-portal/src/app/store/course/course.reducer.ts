import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import * as CourseActions from './course.actions';

/**
 * Course State Interface - Hands-On 9, Task 1, Step 94
 */
export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

/**
 * Course Reducer - Hands-On 9, Task 1, Step 94
 * Pure function that handles state transitions based on actions.
 * Must remain pure - no side effects (HTTP calls, etc.) here.
 */
export const courseReducer = createReducer(
  initialCourseState,

  // On loadCourses: set loading to true, clear previous error
  on(CourseActions.loadCourses, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // On loadCoursesSuccess: store courses, set loading to false
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null
  })),

  // On loadCoursesFailure: store error, set loading to false
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
