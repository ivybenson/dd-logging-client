import React from "react";
import CampaignLog from "../CampaignLog/CampaignLog";
import CreateCharacter from "../CreateCharacter/CreateCharacter";
import AddPost from "../AddPost/AddPost";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div onSubmit={this.addEvent}>
        <CreateCharacter />
        <CampaignLog />
        <AddPost />
      </div>
    );
  }
}
