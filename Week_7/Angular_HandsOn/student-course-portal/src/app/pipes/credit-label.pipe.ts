import { Pipe, PipeTransform } from '@angular/core';

/**
 * CreditLabelPipe - Hands-On 3, Task 3, Steps 35-36
 * Transforms a credits number into a human-readable string.
 * Pure pipe (default) - only re-runs when input reference changes.
 */
@Pipe({
  name: 'creditLabel',
  pure: true  // default - set to false only if needed for mutable data
})
export class CreditLabelPipe implements PipeTransform {
  transform(credits: number | null | undefined): string {
    // Handle edge cases: null, undefined, or 0
    if (credits === null || credits === undefined || credits === 0) {
      return 'No Credits';
    }
    // 1 Credit, 2+ Credits
    return credits === 1 ? '1 Credit' : `${credits} Credits`;
  }
}
