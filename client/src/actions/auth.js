const KEYS = ['id', 'uid', 'access-token', 'client', 'expiry'];

export const login = (id, headers) => {
  for ( let token of KEYS ) {
    localStorage.setItem(token, headers[token])
  };

  localStorage.setItem('id', id)
}

export const logout = () => {
  KEYS.forEach( token => {
    localStorage.removeItem(token);
  });
}

export const tokenCheck = () => {
    if (localStorage['access-token'])
      return headers();
    return null;
  }
  
  export const headers = () => {
    let user = {}
    KEYS.forEach( token => {
      user[token] = localStorage[token];
    });
  
    return user;
  }