import React, {Component} from 'react';
import {Button, LoginPage} from '../StyleComponents/StyledComponents';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }
    
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    handleLoginSubmit = e => {
      const user = this.state.username;
      localStorage.setItem('user', user);
      window.location.reload();
    };

    render(){
        return(
        <LoginPage>
           
            <form>
                <input
                type="text"
                placeholder="User Name"
                name="username"
                autoComplete="on"
                value={this.state.username}
                onChange={this.handleInputChange}
                />
                <input
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="on"
                value={this.state.password}
                onChange={this.handleInputChange}
                />
                <Button onClick={this.handleLoginSubmit}>Log In</Button>
            </form>
        </LoginPage>
        )
    }
    
}

export default Login;