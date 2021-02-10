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
            <p>{this.context.character.name}</p>
            <p>Race: {this.context.character.race} </p>
            <p>Class: {this.context.character.characterClass} </p>
            <p>Level {this.context.character.level}</p>
            <p>Items: {this.context.character.additionalInfo}</p>

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
