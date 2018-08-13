export class WidgetServiceClient {
    findWidgetsForLesson(lessonId) {
      return fetch('http://localhost:8080/api/lesson/' + lessonId + '/widget')
        .then(response => response.json());
    }
  }

  //'https://webdev-summer2-xli.herokuapp.com/api/lesson/'