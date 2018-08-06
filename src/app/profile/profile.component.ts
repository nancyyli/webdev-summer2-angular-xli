import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private router: Router) { }

  user = {};
  username;
  password;
  isAdmin = false;
  sections = [];
  courses = [];

  update() {
     this.service.updateUser(this.user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  enrolledCourses(sectionId) {
    console.log('in enrolling')
    this.sectionService.findSectionById(sectionId).then((section) => {
      console.log(section);
        this.courseService.findCourseById(section.courseId)
        .then(course => {
          this.courses.push(course);
          console.log('enrolling rn');
          console.log(course);
          console.log(this.courses);
        });
    });
  }

  unenroll(sectionId, enrollment) {
    this.sectionService
      .unenrollStudentInSection(sectionId, enrollment._id)
      .then(() => {
        this.sectionService
        .findSectionsForStudent()
        .then(sections => this.sections = sections );
      });
  }
  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        this.user = user
        if (user.username == 'admin') {
          this.isAdmin = true;
        }
      });
 
    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.sections = sections;
        console.log(this.sections);
        this.sections.forEach(((section) => {
          this.enrolledCourses(section.section._id);
        }))
      });
  }

}