import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from "./white-board/white-board.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { SectionsComponent } from './sections/sections.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'courses', component: CourseGridComponent},
  { path: 'admin/courses', component: AdminCourseComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'course/:courseId/section/admin', component: AdminSectionComponent},
  { path: 'course/:courseId/section', component: SectionsComponent }, 
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'quizzes', component: QuizListComponent}, 
  { path: 'quiz/:quizId', component: QuizComponent},
  { path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);