export class LessonServiceClient {
    findLessonsForModule(courseId, moduleId) {
      return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson')
        .then(response => response.json());
    }
  }

  //https://webdev-summer2-xli.herokuapp.com/api/course/'