import React from "react";
import Context from "../Context";
import config from "../config";
import TokenService from "../services/token-service";

export default class CreateCampaign extends React.Component {
  static contextType = Context;

  static defaultProps = {
    onAddCampaign: () => {},
  };

  addSetCampaign = (e) => {
    e.preventDefault();
    const campaign = {
      name: e.target.name.value,
    };
    this.makeCall(`${config.API_ENDPOINT}api/campaign`, campaign);
  };

  addCreatedCampaign = (e) => {
    e.preventDefault();
    const campaign_id = e.target.campaign_id.value;
    this.makeCall(`${config.API_ENDPOINT}api/campaign/${campaign_id}`, {});
  };

  makeCall = (url, data) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        this.context.addCharacter(data.character);
        this.context.addCampaign(data.campaign);
        this.props.history.push("/createcharacter");
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <div className="create-campaign">
        <h2>Create Campaign</h2>
        <form onSubmit={this.addSetCampaign}>
          <fieldset>
            <label>Campaign Name: {""}</label>
            <input
              type="text"
              placeholder="Journey Near and Far"
              id="name"
              required
              aria-required="true"
              aria-label="campaign name"
              name="name"
            />
            <button type="submit">Add New Campaign</button>
          </fieldset>
        </form>
        <p>Campaign Already Created? Please enter campaign code.</p>
        <form onSubmit={this.addCreatedCampaign}>
          <fieldset>
            <label>Code:</label>
            <input
              type="integer"
              id="campaign_id"
              aria-label="campaign id"
              name="campaign_id"
            />
            <button type="submit">Add To Existing Campaign</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
