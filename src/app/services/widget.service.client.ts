export class WidgetServiceClient {
    findWidgetsForLesson(lessonId) {
      return fetch('http://webdev-server-node-xli.herokuapp.com/api/lesson/' + lessonId + '/widget')
        .then(response => response.json());
    }
  }

  //'https://webdev-summer2-xli.herokuapp.com/api/lesson/'