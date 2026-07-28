import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

/**
 * CourseService Unit Tests - Hands-On 10, Task 2
 * Tests HTTP calls using HttpClientTestingModule.
 */
describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 4, gradeStatus: 'pending' }
  ];

  // Step 106: Configure TestBed with HttpClientTestingModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Verify no outstanding HTTP requests after each test
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Step 107: Test getCourses HTTP call
  it('should retrieve courses via GET', (done) => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses[0].name).toBe('Data Structures');
      done();
    });

    // Expect a GET request to the API
    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');

    // Flush the mock response
    req.flush(mockCourses);
  });

  // Step 108: Test error handling
  it('should handle HTTP errors', (done) => {
    service.getCourses().subscribe({
      next: () => fail('should have failed with 500 error'),
      error: (error) => {
        expect(error.message).toContain('Failed to load courses');
        done();
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    // Flush a 500 error response
    req.flush('Server error', { status: 500, statusText: 'Internal Server Error' });
  });

  // Test createCourse HTTP POST
  it('should create a course via POST', (done) => {
    const newCourse = { name: 'AI', code: 'CS401', credits: 3, gradeStatus: 'pending' as const };

    service.createCourse(newCourse).subscribe(course => {
      expect(course.id).toBe(3);
      done();
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCourse);

    req.flush({ id: 3, ...newCourse });
  });

  // Test deleteCourse HTTP DELETE
  it('should delete a course via DELETE', (done) => {
    service.deleteCourse(1).subscribe(() => {
      done();
    });

    const req = httpMock.expectOne('http://localhost:3000/courses/1');
    expect(req.request.method).toBe('DELETE');

    req.flush(null);
  });
});
