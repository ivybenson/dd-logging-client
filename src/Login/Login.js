import React from "react";
import "./Login.css";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import Context from "../Context";

export default class Login extends React.Component {
  static contextType = Context;

  state = {
    error: null,
    0: null,
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = { email: email.value, password: password.value };
    AuthApiService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.context.getCharacter(() => {
          if (this.context.campaign.name && this.context.character.name) {
            this.props.history.push("/dashboard");
          } else {
            this.props.history.push("/createcampaign");
          }
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="login">
        <h2>Log In</h2>
        <div className="defaultlogin">
          Demo login:{" "}
          <ul>
            <li>Email: demo@demo.com</li>
            <li>Password: Password1!</li>
          </ul>
        </div>
        <form className="login-form" onSubmit={this.handleLogin}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset aria-label="email">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Email" name="email" />
          </fieldset>
          <fieldset aria-label="password">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
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
