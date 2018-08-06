export class SectionServiceClient {

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
      console.log(sectionId);
      const url ='http://localhost:3000/api/section/' + sectionId;
      return fetch(url).then(response => response.json());
    }

    updateSection(sectionId, sectionName, sectionSeats) {
      
      var section = {
        name: sectionName,
        seats: sectionSeats
      }
      console.log('updating');
      console.log(section);
      return fetch('http://localhost:3000/api/section/' + sectionId, {
        body:JSON.stringify(section),
        method: 'put', 
        headers: {
          'content-type': 'application/json'
        }
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