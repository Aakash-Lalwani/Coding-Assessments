import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HomeComponent } from './home.component';
import { CourseService } from '../../services/course.service';

/**
 * HomeComponent Unit Tests with MockStore - Hands-On 10, Task 2
 * Tests NgRx-connected component using provideMockStore.
 */
describe('HomeComponent with MockStore', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore;

  const mockCourses = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 4, gradeStatus: 'pending' }
  ];

  // Initial state for the mock store
  const initialState = {
    course: {
      courses: mockCourses,
      loading: false,
      error: null
    }
  };

  // Mock CourseService
  const courseServiceMock = {
    getCourses: () => mockCourses
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        // Step 109: Provide MockStore with initial state
        provideMockStore({ initialState }),
        { provide: CourseService, useValue: courseServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 109: Test with initial state
  it('should display courses count from service', () => {
    fixture.detectChanges();
    expect(component.coursesCount).toBe(2);
  });

  // Step 110: Test loading state changes
  it('should react to state changes', () => {
    // Change the store state
    store.setState({
      course: {
        courses: [],
        loading: true,
        error: null
      }
    });

    fixture.detectChanges();

    // Verify component reacts to new state
    // In a real component, you would check loading indicators in the DOM
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit and log initialization', () => {
    spyOn(console, 'log');
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('HomeComponent initialised - courses loaded');
  });
});
