import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from "../services/section.service.client";
import { Input } from '@angular/core';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {

  newSeatNumber = 10;
  section = {};
  sections = [];
  @Input('courseId') courseId: string;
  @Input('courseTitle') courseTitle: string;
  newSectionName;
  constructor(private service: SectionServiceClient) { }

  ngOnInit() {
    this.loadSections(this.courseId);
  }

  createSection(newSectionName, newSeatNumber) {
      this.service.createSection(this.courseId, newSectionName, newSeatNumber).then(() => this.loadSections(this.courseId));
  }

  updateSection(sectionId, sectionName, sectionSeats) {
    this.service.updateSection(sectionId, sectionName, sectionSeats);
  }

  deleteSection(sectionId) {
    this.service.deleteSection(sectionId).then(() => this.loadSections(this.courseId));
  }

  loadSections(courseId) {
    this.courseId = courseId;
    this.service.findSectionsForCourse(courseId)
      .then(sections => {
        this.sections = sections
        this.newSectionName = this.courseTitle + ' Section ' + (this.sections.length + 1);
      });
  }
}
