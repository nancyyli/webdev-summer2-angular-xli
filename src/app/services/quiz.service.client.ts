export class QuizServiceClient {
    QUIZ_URL = 'http://localhost:3000/api/quiz/';

    findQuizById(quizId) {
        return fetch(this.QUIZ_URL + quizId).then(response => response.json());
    }

    findAllQuizzes() {
        return fetch(this.QUIZ_URL)
          .then(response => response.json());
    }
    
    loadSubmissions(quizId) {
        return fetch(this.QUIZ_URL + quizId + '/submissions').then(response => response.json());
    }

    submitQuiz(submission, quizId) {
        return fetch(this.QUIZ_URL + quizId, {
            body: JSON.stringify(submission),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }
}
