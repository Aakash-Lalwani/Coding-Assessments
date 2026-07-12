import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { EnrollmentService } from '../../services/enrollment.service';

/**
 * CourseCard Component - Hands-On 2, Task 2-3 + Hands-On 3
 * Displays individual course with input/output, lifecycle hooks, directives.
 */
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  // Step 20: @Input for parent-to-child data flow
  @Input() course!: Course;

  // Step 21: @Output for child-to-parent event communication
  @Output() enrollRequested = new EventEmitter<number>();
  @Output() cardClicked = new EventEmitter<number>();

  // Step 31: Toggle expanded state
  isExpanded = false;

  constructor(public enrollmentService: EnrollmentService) {}

  // Step 18/105: ngOnChanges lifecycle hook
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Course changed - Previous:', changes['course'].previousValue, 'Current:', changes['course'].currentValue);
    }
  }

  // Step 31: Toggle expanded
  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Navigate to course detail
  onCardClick(): void {
    this.cardClicked.emit(this.course.id);
  }

  // Step 65: Enroll/unenroll
  onEnroll(event: Event): void {
    event.stopPropagation();
    this.enrollRequested.emit(this.course.id);
  }

  // Step 29/32: Getter for card classes - keeps template clean
  // Using a getter centralizes class logic in the component class instead of the template
  get cardClasses(): { [key: string]: boolean } {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  // Step 30: Getter for border color based on grade status
  get borderStyle(): { [key: string]: string } {
    const colors: { [key: string]: string } = {
      passed: '4px solid #4caf50',
      failed: '4px solid #f44336',
      pending: '4px solid #9e9e9e'
    };
    return { borderLeft: colors[this.course.gradeStatus] || '4px solid #ccc' };
  }
}
