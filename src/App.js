import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
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
