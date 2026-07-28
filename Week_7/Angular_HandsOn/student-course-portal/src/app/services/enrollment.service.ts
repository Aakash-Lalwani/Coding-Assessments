import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

/**
 * EnrollmentService - Hands-On 6, Task 2
 * Manages course enrollments. Demonstrates service-to-service injection.
 * providedIn: 'root' makes this a singleton.
 */
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  // Step 64: Service-to-service injection
  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    // In a real app, this would call courseService.getCourseById for each enrolled ID
    // For simplicity, return all courses and filter (this is a demo)
    const allCourses: Course[] = [
      { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
      { id: 2, name: 'Algorithms', code: 'CS102', credits: 4, gradeStatus: 'pending' },
      { id: 3, name: 'Web Development', code: 'CS201', credits: 3, gradeStatus: 'passed' },
      { id: 4, name: 'Database Systems', code: 'CS202', credits: 3, gradeStatus: 'failed' },
      { id: 5, name: 'Machine Learning', code: 'CS301', credits: 4, gradeStatus: 'pending' }
    ];
    return allCourses.filter(c => this.enrolledCourseIds.includes(c.id));
  }
}
