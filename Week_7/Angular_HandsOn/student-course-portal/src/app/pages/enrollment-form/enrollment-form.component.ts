import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

/**
 * EnrollmentForm Component - Hands-On 4: Template-Driven Forms & Validation
 * Demonstrates ngForm, ngModel, built-in validators, and error display.
 */
@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  // Step 46: Success message toggle
  submitted = false;

  // Step 40: Form submission handler
  onSubmit(form: NgForm): void {
    console.log('Form Value:', form.value);
    console.log('Form Valid:', form.valid);
    if (form.valid) {
      this.submitted = true;
    }
  }

  // Step 47: Reset form
  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
