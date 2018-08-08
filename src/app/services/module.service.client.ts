export class ModuleServiceClient {
    MODULE_URL = 'https://webdev-summer2-xli.herokuapp.com/api/course/COURSE_ID/module';
    findModulesForCourse(courseId) {
      return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
        .then(response => response.json());
    }
  }