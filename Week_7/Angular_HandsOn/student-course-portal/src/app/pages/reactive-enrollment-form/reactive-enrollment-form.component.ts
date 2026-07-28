import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

/**
 * Custom validator: disallows course codes starting with 'XX'
 * Step 53: Custom synchronous validator
 */
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && String(value).startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

/**
 * Async validator: simulates email availability check
 * Step 55: Custom async validator
 */
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

/**
 * ReactiveEnrollmentForm Component - Hands-On 5: Reactive Forms
 * Demonstrates FormBuilder, FormGroup, FormArray, custom validators.
 */
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 49: Build reactive form with FormBuilder
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Step 55: Async validator as third argument
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      // Step 56: FormArray for dynamic controls
      additionalCourses: this.fb.array([])
    });
  }

  // Step 57: Typed getter for FormArray - better than casting in template
  // because it provides type safety and keeps template expressions clean
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Step 56: Add course to FormArray
  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  // Step 56: Remove course from FormArray
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Step 51: Form submission
  onSubmit(): void {
    if (this.enrollForm.valid) {
      // Step 52: Log value (excludes disabled) and getRawValue (includes all)
      console.log('Form Value (excludes disabled):', this.enrollForm.value);
      console.log('Form Raw Value (includes all):', this.enrollForm.getRawValue());
      this.submitted = true;
    }
  }

  // Reset form
  onReset(): void {
    this.enrollForm.reset({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    // Clear FormArray
    while (this.additionalCourses.length) {
      this.additionalCourses.removeAt(0);
    }
    this.submitted = false;
  }
}
