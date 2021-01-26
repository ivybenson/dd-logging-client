import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import config from "./config";
import TokenService from "./services/token-service";
import CreateCampaign from "./CreateCampaign/CreateCampaign";
import CreateCharacter from "./CreateCharacter/CreateCharacter";
import Dashboard from "./Dashboard/Dashboard";
import LandingPage from "./LandingPage/LandingPage";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import NavBar from "./NavBar/Navbar";

class App extends React.Component {
  state = {
    users: [],
    campaign: {},
    character: {},
    posts: [],
    addCampaign: (campaign) => {
      this.setState({ campaign: campaign });
    },
    addCharacter: (character) => {
      this.setState({
        character: character,
      });
    },
    addPost: (post) => {
      this.setState({
        posts: [...this.state.posts, post],
      });
    },
    getCampaign: () => {
      fetch(`${config.API_ENDPOINT}api/campaign`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((campaign) =>
          this.setState({ campaign }, () => this.state.getCharacter())
        );
    },
    getCharacter: () => {
      fetch(`${config.API_ENDPOINT}api/character`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((character) =>
          this.setState({ character }, () => this.state.getPosts())
        );
    },
    getPosts: () => {
      fetch(`${config.API_ENDPOINT}api/post`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((posts) => this.setState({ posts }));
    },
    logout: () => {
      this.setState({ posts: [], character: {} });
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/createcampaign" component={CreateCampaign} />
          <Route path="/character" component={CreateCharacter} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
