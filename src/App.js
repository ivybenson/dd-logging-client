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
    getCampaign: (cb) => {
      fetch(
        `${config.API_ENDPOINT}api/campaign/${this.state.character.campaign_id}`,
        {
          headers: {
            Authorization: `Bearer ${TokenService.getAuthToken()}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) =>
          this.setState({ campaign: data.campaign ? data.campaign : {} }, cb)
        );
    },
    getCharacter: (cb) => {
      fetch(`${config.API_ENDPOINT}api/character`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((data) =>
          this.setState(
            { character: data.character ? data.character : {} },
            () => {
              this.state.character.campaign_id
                ? this.state.getCampaign(cb)
                : cb();
            }
            // this.setState({ character }, () => this.state.getPosts())
          )
        );
    },
    getPosts: () => {
      fetch(`${config.API_ENDPOINT}api/post`, {
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((data) => this.setState({ posts: data.posts ? data.posts : [] }));
    },
    logout: () => {
      this.setState({ users: [], campaign: {}, character: {}, posts: [] });
    },
  };

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.state.getCharacter();
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/createcampaign" component={CreateCampaign} />
          <Route path="/createcharacter" component={CreateCharacter} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
