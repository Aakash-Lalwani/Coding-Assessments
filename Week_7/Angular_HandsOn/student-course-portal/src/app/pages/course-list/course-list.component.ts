import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { loadCourses } from '../../store/course/course.actions';

/**
 * CourseList Component - Hands-On 2, 3 + 6 + 9
 * Displays a list of courses using structural directives and NgRx store.
 */
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // Step 25: Loading state
  isLoading = true;

  // Hands-On 8+9: Use NgRx store observables
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  // Step 23: Selected course ID from @Output
  selectedCourseId: number | null = null;

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router,
    private store: Store
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    // Step 25: Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    // Hands-On 9: Dispatch load action to NgRx store
    this.store.dispatch(loadCourses());
  }

  // Step 26: trackBy function for performance optimization
  // trackBy improves performance by only re-rendering items that have changed
  // instead of re-rendering the entire list when the array reference changes
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  // Step 23: Handle enroll event from child component
  onEnroll(courseId: number): void {
    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
    } else {
      this.enrollmentService.enroll(courseId);
    }
    this.selectedCourseId = courseId;
    console.log('Enrolling in course:', courseId);
  }

  // Step 70: Navigate to course detail
  onCardClick(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}
