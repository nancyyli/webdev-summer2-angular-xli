import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client'
import {ActivatedRoute} from "@angular/router";
import {Quiz} from "../models/quiz.model.client";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: QuizServiceClient, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.loadQuiz(params['quizId']));
  }

  quiz: Quiz = new Quiz();
  submit() {
    console.log('submitting');
  }
  loadQuiz(quizId) {
    this.service.findQuizById(quizId).then(quiz =>   {
      this.quiz = quiz;
    });
  }

  ngOnInit() {
  }

}
