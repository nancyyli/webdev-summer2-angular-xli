import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sections = [];
  
  courseId = this.route.snapshot.params.courseId;
  courseTitle;
  constructor(private router: Router, private route: ActivatedRoute, private service: SectionServiceClient, private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.loadSections(this.courseId);
    this.findCourseById(this.courseId);
  }

  enroll(section) {
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  } 

  findCourseById(courseId) {
    this.courseService.findCourseById(courseId)
    .then((course) => {
      this.courseTitle = course.title;
    })
  }
  
  loadSections(courseId) {
    this.courseId = courseId;
    this.service.findSectionsForCourse(courseId)
      .then(sections => {this.sections = sections});
  }
}
