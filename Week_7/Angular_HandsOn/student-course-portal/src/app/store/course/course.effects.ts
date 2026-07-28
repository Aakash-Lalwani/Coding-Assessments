import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { CourseService } from '../../services/course.service';
import * as CourseActions from './course.actions';

/**
 * Course Effects - Hands-On 9, Task 2, Steps 97-98
 * Effects handle side effects (HTTP calls) in NgRx.
 * They listen for actions, perform side effects, and dispatch new actions.
 * Reducers must remain pure - all side effects belong in effects.
 */
@Injectable()
export class CourseEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  /**
   * Load Courses Effect
   * Listens for loadCourses action -> calls HTTP service -> dispatches success/failure
   */
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      // Listen only for loadCourses action
      ofType(CourseActions.loadCourses),
      // Switch to the HTTP call Observable
      switchMap(() =>
        this.courseService.getCourses().pipe(
          // On success: dispatch loadCoursesSuccess
          map(courses => CourseActions.loadCoursesSuccess({ courses })),
          // On error: dispatch loadCoursesFailure
          catchError(error => of(CourseActions.loadCoursesFailure({ error: error.message })))
        )
      )
    )
  );
}
