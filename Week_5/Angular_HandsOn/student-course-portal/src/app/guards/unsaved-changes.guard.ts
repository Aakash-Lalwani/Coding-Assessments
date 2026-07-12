import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../pages/reactive-enrollment-form/reactive-enrollment-form.component';

/**
 * UnsavedChangesGuard - Hands-On 7, Task 2, Step 77
 * Prevents accidental navigation away from dirty forms.
 * Shows a browser confirm dialog if the form has unsaved changes.
 */
@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<ReactiveEnrollmentFormComponent> {
  canDeactivate(component: ReactiveEnrollmentFormComponent): boolean {
    // Check if the form is dirty (has been modified)
    if (component.enrollForm && component.enrollForm.dirty) {
      return window.confirm('You have unsaved changes. Leave?');
    }
    return true;  // Allow navigation if form is clean
  }
}
