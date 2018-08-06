
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  constructor(private service: LessonServiceClient,
    private route: ActivatedRoute) {
      this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  lessons = [];

  setParams(params) {
  this.courseId = params['courseId'];
  this.moduleId = params['moduleId'];
  this.lessonId = params['lessonId'];
  this.loadLessons(this.moduleId);
  }

  loadLessons(moduleId) {
    this.service.findLessonsForModule(this.courseId, this.moduleId)
    .then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
  }

}