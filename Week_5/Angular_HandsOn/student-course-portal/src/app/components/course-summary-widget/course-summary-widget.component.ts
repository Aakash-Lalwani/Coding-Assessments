import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

/**
 * CourseSummaryWidget Component - Hands-On 6, Task 1, Step 62
 * Demonstrates shared singleton service instance.
 */
@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.component.html',
  styleUrls: ['./course-summary-widget.component.css']
})
export class CourseSummaryWidgetComponent implements OnInit {
  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.totalCourses = this.courseService.getCourses().length;
  }
}
