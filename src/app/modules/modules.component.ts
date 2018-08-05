import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModuleServiceClient} from "../services/module.service.client";

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  constructor(private service: ModuleServiceClient,
    private route: ActivatedRoute) {
      this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  modules = [];

  setParams(params) {
  this.courseId = params['courseId'];
  this.moduleId = params['moduleId'];
  this.loadModules(this.courseId);
  }

  loadModules(courseId) {
    this.courseId = courseId;
    this.service.findModulesForCourse(courseId)
    .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}