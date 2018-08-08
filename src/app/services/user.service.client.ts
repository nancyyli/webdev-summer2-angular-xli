export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  findAllUsers() {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/user').then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/user/' + username).then(response => response.json());
  }

  currentUser() {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/user/exists', {
      credentials: 'include'
    }).then(response => response.json());
  }
  
  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  deleteAccount() {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/profile', {
      credentials: 'include',
      method: 'delete'
    });
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updateUser(user) {
    return fetch('https://webdev-server-node-xli.herokuapp.com/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
