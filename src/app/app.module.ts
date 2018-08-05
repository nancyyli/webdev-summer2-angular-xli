import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { WhiteBoardComponent } from './white-board/white-board.component';
import {routing} from "./app.routing";
import { CourseGridComponent } from './course-grid/course-grid.component';
import {CourseServiceClient} from './services/course.service.client';
import {UserServiceClient} from './services/user.service.client';
import { SectionServiceClient} from './services/section.service.client';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCourseComponent } from './admin-course/admin-course.component';
import { AdminSectionComponent } from './admin-section/admin-section.component';
import { SectionsComponent } from './sections/sections.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModulesComponent } from './modules/modules.component';
import { ModuleServiceClient } from './services/module.service.client';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonServiceClient } from './services/lesson.service.client';
@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    AdminCourseComponent,
    AdminSectionComponent,
    SectionsComponent,
    CourseViewerComponent,
    ModulesComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    UserServiceClient,
    SectionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }