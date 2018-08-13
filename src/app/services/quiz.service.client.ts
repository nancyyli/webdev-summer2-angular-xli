export class QuizServiceClient {

    findAllQuizzes() {
        return fetch('http://localhost:3000/api/quiz')
          .then(response => response.json());
      }
}