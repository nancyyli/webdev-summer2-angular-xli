import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizServiceClient} from "../services/quiz.service.client";

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  constructor(private service: QuizServiceClient,
    private aRoute: ActivatedRoute) {
      this.aRoute.params.subscribe(params =>
        this.loadSubmissions(params['quizId'], params['submissionId']));
     }

  quizId = '';
  submissionId = '';
  submission = {};
  answers = [];
  quiz = {};

  loadQuiz() {
    this.service.findQuizById(this.quizId).then(quiz => this.quiz = quiz);
  }

  loadSubmissions(quizId, submissionId) {
    this.quizId = quizId;
    this.submissionId = submissionId;
    this.service.loadSubmissionById(this.quizId, submissionId)
    .then(submission => {
      this.submission = submission;
      console.log(this.submission);
      this.answers = submission.answers;
      console.log(this.answers);
    });

    this.loadQuiz();
  }

  ngOnInit() {
  }

}
