import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {
  courses = [];
  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService
    .findAllCourses()
    .then(courses => this.courses = courses);
  }

}
