import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import CreateCampaign from "./CreateCampaign/CreateCampaign";
import CreateCharacter from "./CreateCharacter/CreateCharacter";
import Dashboard from "./Dashboard/Dashboard";
import CampaginLog from "./CampaignLog/CampaignLog";
import AddPost from "./AddPost/AddPost";
import LandingPage from "./LandingPage/LandingPage";

class App extends React.Component {
  state = {
    users: [],
    campaign: {},
    character: {},
    posts: [
      {
        id: 1,
        characterid: 1,
        campaignid: 1,
        title: "public post",
        content: "I like this character",
        private: false,
        datecreated: "01/07/21",
      },
      {
        id: 2,
        characterid: 1,
        campaignid: 1,
        title: "post number two",
        content: "information two",
        private: true,
        datecreated: "01/08/21",
      },
      {
        id: 3,
        characterid: 1,
        campaignid: 1,
        title: "post number three",
        content: "information three",
        private: true,
        datecreated: "01/09/21",
      },
      {
        id: 4,
        characterid: 1,
        campaignid: 1,
        title: "post number four",
        content: "information four",
        private: false,
        datecreated: "01/10/21",
      },
    ],
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
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <header>
            <h1>Dungeons Truth</h1>
          </header>
          <Route path="/dashboard" component={Dashboard} />
          {/* <LandingPage /> */}
          <CreateCampaign />
          <CreateCharacter />
          <AddPost />
          <CampaginLog />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
