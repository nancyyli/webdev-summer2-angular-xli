import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sections = [];
  
  courseId = this.route.snapshot.params.courseId;
  constructor(private router: Router, private route: ActivatedRoute, private service: SectionServiceClient) { }

  ngOnInit() {
    this.loadSections(this.courseId);
  }

  enroll(section) {
    this.service
      .enrollStudentInSection(section._id)
      .then(() => {
        this.router.navigate(['profile']);
      });
  }
  
  loadSections(courseId) {
    this.courseId = courseId;
    this.service.findSectionsForCourse(courseId)
      .then(sections => {this.sections = sections});
  }
}
