export class QuizServiceClient {

    findQuizById(quizId) {
        return fetch('http://localhost:3000/api/quiz/' + quizId).then(response => response.json());
    }

    findAllQuizzes() {
        return fetch('http://localhost:3000/api/quiz')
          .then(response => response.json());
    }
}