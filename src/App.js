import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Context from "./Context";
import CreateCampaign from "./CreateCampaign/CreateCampaign";
import CreateCharacter from "./CreateCharacter/CreateCharacter";
import Dashboard from "./Dashboard/Dashboard";
import CampaginLog from "./CampaignLog/CampaignLog";
import PrivateLog from "./PrivateLog/PrivateLog";
import AddPost from "./AddPost/AddPost";

class App extends React.Component {
  state = {
    users: [],
    campaign: [],
    characters: [],
    posts: [
      {
        id: 1,
        characterid: 1,
        campaignid: 1,
        title: "post number one",
        content: "information one",
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
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <header>
            <h1>Dungeons Truth</h1>
          </header>
          <Route path="/dashboard" component={Dashboard} />
          <CreateCampaign />
          <CreateCharacter />
          <AddPost />
          <CampaginLog />
          <PrivateLog />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
