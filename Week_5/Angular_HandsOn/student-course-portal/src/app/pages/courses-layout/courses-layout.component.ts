import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

/**
 * CoursesLayout Component - Hands-On 7, Task 1, Step 72
 * Parent component for nested course routes with router outlet.
 */
@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './courses-layout.component.html',
  styleUrls: ['./courses-layout.component.css']
})
export class CoursesLayoutComponent {}
