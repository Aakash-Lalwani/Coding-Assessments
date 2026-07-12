import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

/**
 * Home Component - Hands-On 1, Task 2 + Hands-On 2
 * Displays welcome message, stats, and demonstrates all 4 binding types.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Step 11: String interpolation property
  portalName = 'Student Course Portal';

  // Step 12: Property binding
  isPortalActive = true;

  // Step 13: Event binding
  message = '';

  // Step 14: Two-way binding
  searchTerm = '';

  // Hands-On 6: Stats from service
  coursesCount = 0;
  enrolledCount = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  // Step 16: ngOnInit lifecycle hook
  ngOnInit(): void {
    console.log('HomeComponent initialised - courses loaded');
    // Hands-On 6: Get courses count from service
    this.coursesCount = this.courseService.getCourses().length;
  }

  // Step 17: ngOnDestroy lifecycle hook
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Step 13: Event handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
