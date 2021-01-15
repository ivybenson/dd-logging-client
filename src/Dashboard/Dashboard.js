import React from "react";
import CampaignLog from "../CampaignLog/CampaignLog";
import CreateCharacter from "../CreateCharacter/CreateCharacter";
import PrivateLog from "../PrivateLog/PrivateLog";
import AddPost from "../AddPost/AddPost";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div onSubmit={this.addEvent}>
        <CreateCharacter />

        <CampaignLog />
        <PrivateLog />
        <AddPost />
      </div>
    );
  }
}
