import React from "react";
// import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import Context from "../Context.js";
// import { API_ENDPOINT } from "../config";

export default class Login extends React.Component {
  static contextType = Context;

  state = {
    error: null,
  };

  handleLogin = (e) => {
    e.preventDefault();
    // const { email, password } = e.target;
    // const user = { email: email.value, password: password.value };
    // AuthApiService.loginUser(user)
    //   .then((loginResponse) => {
    //     TokenService.saveAuthToken(loginResponse.authToken);
    //     this.context.getHabits();
    //     this.props.history.push("/dashboard");
    //   })
    //   .catch((res) => {
    //     this.setState({ error: res.error });
    //   });
    TokenService.saveAuthToken("098092840981209wceoiewuhc");
    this.props.history.push("/createcampaign");
  };

  render() {
    return (
      <div className="login">
        <h2>Log In</h2>
        <div className="defaultlogin">
          {/* <p>
            Demo login:{" "}
            <ul>
              <li>Email: demo1@demo.com</li>
              <li>Password: Password1!</li>
            </ul>
          </p> */}
        </div>
        <form className="login-form" onSubmit={this.handleLogin}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset aria-label="email">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              // value="demo@demo.com"
            />
          </fieldset>
          <fieldset aria-label="password">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              // value="password1234"
            />
          </fieldset>
          <button className="login-btn" type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}
