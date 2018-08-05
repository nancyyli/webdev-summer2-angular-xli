import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css']
})
export class AdminCourseComponent implements OnInit {
  courses = [];
  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService
    .findAllCourses()
    .then(courses => this.courses = courses);
  }

}
