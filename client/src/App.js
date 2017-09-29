import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Auth from './components/Auth';
import NavBar from './components/NavBar';
import { tokenCheck } from './actions/auth';
import axios from 'axios';
import Home from './components/Home';

class App extends React.Component {
  state = { user: {} } 

  loginUser = () => {
    let user = tokenCheck();
    for ( let key of Object.keys(user) ) {
        axios.defaults.headers.common[key] = user[key]
      }

      this.setState({ user });

      axios.get('/auth/validate_token')
        .then( ({ data: { data }}) => {
          this.setState({ user: {...user, ...data } }) 
        })
    }
  

  render() {
    let { user } = this.state;
    return (
    <div>
    <NavBar logoutUser={this.logoutUser} user={this.state.user.id} />
    <Container>
      { user.id ? <Home user={user} /> : <Auth loginUser={this.loginUser} /> }
    </Container>
  </div>
)
}
}

export default App;