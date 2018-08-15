export class LessonServiceClient {
    findLessonsForModule(courseId, moduleId) {
      return fetch('https://webdev-summer2-xli.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
        .then(response => response.json());
    }
  }

  //https://webdev-summer2-xli.herokuapp.com/api/course/'