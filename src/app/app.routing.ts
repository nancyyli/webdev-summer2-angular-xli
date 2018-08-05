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

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/courses', component: AdminCourseComponent},
  { path: 'course/:courseId', component: CourseViewerComponent},
  { path: 'course/:courseId/section/admin', component: AdminSectionComponent},
  { path: 'course/:courseId/section', component: SectionsComponent }, 
  { path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);