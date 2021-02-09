import React from "react";
import { Link } from "react-router-dom";
import CampaignLog from "../CampaignLog/CampaignLog";
import AddPost from "../AddPost/AddPost";
import Context from "../Context";

export default class Dashboard extends React.Component {
  static contextType = Context;

  componentDidMount() {
    this.context.getPosts();
  }
  render() {
    return (
      <div>
        <div className="character-stats">
          <fieldset className="character-stats-form">
            <h3>
              {this.context.campaign.name} Code: {this.context.campaign.id}
            </h3>
            <h3>
              {this.context.character.name} Race: {this.context.character.race}{" "}
              Class: {this.context.character.characterClass} Level{" "}
              {this.context.character.level} Items:{" "}
              {this.context.character.additionalInfo}
            </h3>

            <Link to="/createcharacter">
              <button className="update-character-btn">Update Character</button>
            </Link>
          </fieldset>
        </div>
        <AddPost />
        <CampaignLog />
      </div>
    );
  }
}
