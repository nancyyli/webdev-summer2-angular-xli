export class UserServiceClient {

    findUserByUsername(userName) {
      return fetch('http://localhost:8080/api/user/username/' + userName)
        .then(response => response.text());
    }
  
    createUser(username, password) {
      const user = {
        username: username,
        password: password
      };
      return fetch('http://localhost:8080/api/user', {
        body: JSON.stringify(user),
        // credentials: 'include', // include, same-origin, *omit
        method: 'post',
        headers: {
          'content-type': 'application/json'
        }
      });
    }

    login(username, password) {
      const credentials = {
        username: username,
        password: password
      };
      return fetch('http://localhost:8080/api/login', {
        method: 'post',
        body: JSON.stringify(credentials),
        // credentials: 'include', // change later
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.text());
    }
  }