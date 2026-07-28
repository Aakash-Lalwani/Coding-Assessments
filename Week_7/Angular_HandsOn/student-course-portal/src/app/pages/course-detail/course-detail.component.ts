import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

/**
 * CourseDetail Component - Hands-On 7, Task 1, Steps 69
 * Displays detailed view of a single course using route parameters.
 */
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    // Step 69: Read route parameter :id
    const idParam = this.route.snapshot.paramMap.get('id');
    const courseId = idParam ? Number(idParam) : null;

    if (courseId) {
      // Hands-On 8: Use observable with subscribe
      this.courseService.getCourseById(courseId).subscribe({
        next: (course) => {
          this.course = course;
        },
        error: (err) => {
          this.errorMessage = err.message;
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/courses']);
  }
}
