import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChanges, SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { EnrollmentService } from '../../services/enrollment.service';

/**
 * CourseCardComponent Unit Tests - Hands-On 10, Task 1
 * Tests rendering, @Input, @Output, and ngOnChanges.
 */
describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  // Mock course data for testing
  const mockCourse = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed' as const
  };

  // Step 101: Configure TestBed before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent, CreditLabelPipe, HighlightDirective],
      providers: [EnrollmentService]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Step 102: Component creation test
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: @Input rendering test
  it('should display course name in the template', () => {
    // Set the course input
    component.course = mockCourse;
    // Trigger change detection
    fixture.detectChanges();

    // Query the DOM for h3 element
    const h3Element = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3Element.textContent).toContain('Data Structures');
  });

  // Step 104: @Output event emitter test
  it('should emit enrollRequested event when Enroll button is clicked', () => {
    // Set course and spy on the emit method
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    // Find and click the button
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    fixture.detectChanges();

    // Verify the event was emitted with correct course ID
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Step 105: ngOnChanges lifecycle hook test
  it('should log when course input changes (ngOnChanges)', () => {
    spyOn(console, 'log');

    component.course = mockCourse;
    const changes: SimpleChanges = {
      course: new SimpleChange(undefined, mockCourse, true)
    };

    component.ngOnChanges(changes);

    expect(console.log).toHaveBeenCalled();
  });

  // Additional test: cardClasses getter
  it('should return correct card classes', () => {
    component.course = mockCourse;
    const classes = component.cardClasses;

    expect(classes['card--full']).toBeTrue(); // credits >= 4
    expect(classes['expanded']).toBeFalse();
  });

  // Additional test: borderStyle getter
  it('should return green border for passed status', () => {
    component.course = mockCourse;
    const style = component.borderStyle;

    expect(style['borderLeft']).toBe('4px solid #4caf50');
  });
});
