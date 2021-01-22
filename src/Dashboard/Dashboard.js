import React from "react";
import CampaignLog from "../CampaignLog/CampaignLog";
import AddPost from "../AddPost/AddPost";
import Context from "../Context";

export default class Dashboard extends React.Component {
  static contextType = Context;
  render() {
    return (
      <div onSubmit={this.addEvent}>
        <h3>
          Campaign: {this.context.campaign.name} - #{this.context.campaign.id}
        </h3>
        <h3>
          You are {this.context.character.name} a {this.context.character.race}{" "}
          {this.context.character.characterclass}, Level{" "}
          {this.context.character.level}
        </h3>

        <AddPost />
        <CampaignLog />
      </div>
    );
  }
}
