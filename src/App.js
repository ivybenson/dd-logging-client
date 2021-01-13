import "./App.css";
import React from "react";
import Context from "./Context";
import CreateCampaign from "./CreateCampaign/CreateCampaign";
import CreateCharacter from "./CreateCharacter/CreateCharacter";

class App extends React.Component {
  state = {
    users: [],
    campaign: [],
    characters: [],
    posts: [
      {
        id: 1,
        userid: 1,
        campaignid: 1,
        title: "",
        content: "",
        private: true,
        datecreated: "01/10/21",
      },
      {
        id: 2,
        userid: 1,
        campaignid: 1,
        title: "",
        content: "",
        private: true,
        datecreated: "01/10/21",
      },
      {
        id: 3,
        userid: 1,
        campaignid: 1,
        title: "",
        content: "",
        private: true,
        datecreated: "01/10/21",
      },
      {
        id: 4,
        userid: 1,
        campaignid: 1,
        title: "",
        content: "",
        private: true,
        datecreated: "01/10/21",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <header>
            <h1>RPG Logger</h1>
          </header>
          <div>Create User</div>
          <CreateCampaign />
          <CreateCharacter />
          <div>Private Character Log</div>
          <div>Campaign Log</div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
