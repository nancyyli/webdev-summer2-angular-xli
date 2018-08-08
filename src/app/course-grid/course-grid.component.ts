import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courses = [];
  currentCourses = [];
  sections = [];
  constructor(private courseService: CourseServiceClient, private sectionService: SectionServiceClient, private userService: UserServiceClient) { }

  ngOnInit() {
    this.courseService
    .findAllCourses()
    .then(courses => this.courses = courses);
    this.loadCourses();
  }
  enrolledCourses(sectionId) {
    this.sectionService.findSectionById(sectionId).then((section) => {
        this.courseService.findCourseById(section.courseId)
        .then(course => {
          this.currentCourses.push(course);
        });
    });
  }

  loadCourses() {
    this.userService.currentUser().then((user) => {
      var currentUser = user;
      if (Object.keys(currentUser).length) {
        this.sectionService
        .findSectionsForStudent()
        .then(sections => {
          sections.forEach(((section) => {
            if (section.section) {
              this.sections.push(section);
              this.enrolledCourses(section.section._id);
            }
          }))
        });
      }
    })
  }

}
