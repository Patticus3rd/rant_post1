import React from 'react';
import axios from 'axios';
import { Form, Header } from 'semantic-ui-react';
import { login } from '../actions/auth';

class Register extends React.Component {
  state = { email: '', password: '', password_confirmation: "" }

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    axios.post('/auth', { email, password })
      .then( res => login(res.data.data.id, res.headers) )
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  checkPasswords = () => {
    let errors = [];
    let { password, password_confirmation } = this.state;
    if (password && password.length < 6)
      errors.push('Password must be > 6 chars')
    if (password !== password_confirmation)
      errors.push('Passwords do not match');

    return errors.map( (err, i) => <Header key={i} as="h1" color="red" center>{err}</Header> )
  }

  render() {
    return (
      <div>
        { this.checkPasswords() }
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label="Password Confirmation"
            type="password"
            name="password_confirmation"
            onChange={this.handleChange}
            required
          />
          <Form.Button>
            Submit
          </Form.Button>
        </Form>
      </div>
    )
  }
}

export default Register;