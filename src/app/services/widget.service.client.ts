export class WidgetServiceClient {
    findWidgetsForLesson(lessonId) {
      return fetch('https://webdev-summer2-xli.herokuapp.com/api/lesson/' + lessonId + '/widget')
        .then(response => response.json());
    }
  }