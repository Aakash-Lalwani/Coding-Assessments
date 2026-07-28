import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EnrollmentFormComponent } from '../../pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from '../../pages/reactive-enrollment-form/reactive-enrollment-form.component';
import { UnsavedChangesGuard } from '../../guards/unsaved-changes.guard';

/**
 * Enrollment Feature Module - Hands-On 7, Task 2, Steps 73-74
 * Lazy-loaded module for enrollment-related components.
 * Only loaded when user navigates to /enroll route.
 */
const enrollmentRoutes: Routes = [
  { path: '', component: EnrollmentFormComponent },
  { path: 'reactive', component: ReactiveEnrollmentFormComponent, canDeactivate: [UnsavedChangesGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EnrollmentFormComponent,  // standalone
    ReactiveEnrollmentFormComponent,  // standalone
    RouterModule.forChild(enrollmentRoutes)
  ]
})
export class EnrollmentModule {}
