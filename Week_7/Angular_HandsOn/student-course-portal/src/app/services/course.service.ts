import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

/**
 * CourseService - Hands-On 6, Task 1 + Hands-On 8
 * Provides course data via HTTP. Uses RxJS operators for transformation and error handling.
 * providedIn: 'root' makes this a singleton shared across the entire application.
 */
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // Hands-On 8: HTTP client for API calls
  constructor(private http: HttpClient) {}

  /**
   * Step 79: Get all courses via HTTP GET
   * Uses RxJS operators: map, catchError, tap, retry
   */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Step 83: map operator to filter courses with credits > 0
      map(courses => courses.filter(c => c.credits > 0)),
      // Step 85: tap for side effects (logging) - preferred over side effects in map
      // because tap does not modify the stream data, it only performs side effects
      tap(courses => console.log('Courses loaded:', courses.length)),
      // Step 86: retry failed requests up to 2 times
      retry(2),
      // Step 84: catchError for error handling
      catchError(err => {
        console.error('Error loading courses:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  /**
   * Step 79: Get single course by ID
   */
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        console.error(`Error loading course ${id}:`, err);
        return throwError(() => new Error('Failed to load course. Please try again.'));
      })
    );
  }

  /**
   * Step 81: Create new course via HTTP POST
   */
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      tap(newCourse => console.log('Course created:', newCourse)),
      catchError(err => {
        console.error('Error creating course:', err);
        return throwError(() => new Error('Failed to create course. Please try again.'));
      })
    );
  }

  /**
   * Step 82: Update course via HTTP PUT
   */
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course).pipe(
      catchError(err => {
        console.error('Error updating course:', err);
        return throwError(() => new Error('Failed to update course. Please try again.'));
      })
    );
  }

  /**
   * Step 82: Delete course via HTTP DELETE
   */
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        console.error('Error deleting course:', err);
        return throwError(() => new Error('Failed to delete course. Please try again.'));
      })
    );
  }

  /**
   * Step 87: Get students by course using switchMap pattern
   * This demonstrates chaining HTTP calls with switchMap
   */
  getStudentsByCourse(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/enrollments?courseId=${courseId}`);
  }
}
