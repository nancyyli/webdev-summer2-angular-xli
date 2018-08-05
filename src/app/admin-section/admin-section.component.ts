import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import { Input } from '@angular/core';
@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {

  courses = [];
  newSectionName;
  @Input('courseId') courseId: string;
  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService
    .findAllCourses()
    .then(courses => this.courses = courses);
  }

  createSection(newSectionName, courseId) {
      console.log('creating');
  }

}
