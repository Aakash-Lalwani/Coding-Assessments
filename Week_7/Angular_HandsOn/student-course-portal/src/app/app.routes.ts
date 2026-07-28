import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

/**
 * Route configuration for the Student Course Portal.
 * Includes lazy loading for enrollment feature module.
 */
export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses-layout/courses-layout.component').then(m => m.CoursesLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./pages/course-list/course-list.component').then(m => m.CourseListComponent) },
      { path: ':id', loadComponent: () => import('./pages/course-detail/course-detail.component').then(m => m.CourseDetailComponent) }
    ]
  },
  { path: 'profile', canActivate: [AuthGuard], loadComponent: () => import('./pages/student-profile/student-profile.component').then(m => m.StudentProfileComponent) },
  {
    path: 'enroll',
    loadChildren: () => import('./features/enrollment/enrollment.module').then(m => m.EnrollmentModule)
  },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
