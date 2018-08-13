export class SectionServiceClient {

    // SECTION_URL = 'https://webdev-server-node-xli.herokuapp.com/api/course/COURSEID/section';
    SECTION_URL = 'http://localhost:3000/api/course/COURSEID/section';
  
    findSectionsForStudent() {
      const url = 'http://localhost:3000/api/student/section';
      return fetch(url, {
        credentials: 'include'
      })
        .then(response => response.json());
    }


  
    enrollStudentInSection(sectionId) {
      const url = 'http://localhost:3000/api/section/' + sectionId + '/enrollment';
      return fetch(url, {
        method: 'post',
        credentials: 'include'
      });
    }

    unenrollStudentInSection(sectionId, enrollmentId) {
      const url = 'http://localhost:3000/api/section/' + sectionId + '/enrollment/' + enrollmentId;
      return fetch(url, {
        method: 'delete', 
        credentials: 'include'
      });
    }
  
    findSectionsForCourse(courseId) {
      return fetch(this.SECTION_URL.replace('COURSEID', courseId))
        .then(response => response.json());
    }

    findSectionById(sectionId) {
      const url ='http://localhost:3000/api/section/' + sectionId;
      return fetch(url).then(response => response.json());
    }

    updateSection(sectionId, sectionName, sectionSeats) {
      var section = {
        name: sectionName,
        seats: sectionSeats
      }
      return fetch('http://localhost:3000/api/section/' + sectionId, {
        body:JSON.stringify(section),
        method: 'put', 
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      })
    }

    deleteSection(sectionId) {
      return fetch('http://localhost:3000/api/section/' + sectionId, {
        method: 'delete',
        credentials: 'include'
      })
    }
    createSection(courseId, name, seats) {
      const section = {courseId, name, seats};
      return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
        method: 'post',
        body: JSON.stringify(section),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      });
    }
  }