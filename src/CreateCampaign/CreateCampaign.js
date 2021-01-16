import React from "react";
import Context from "../Context";
import config from "../config";
import TokenService from "../services/token-service";

export default class CreateCampaign extends React.Component {
  static contextType = Context;

  static defaultProps = {
    onAddCampaign: () => {},
  };

  addNewCampaign = (e) => {
    const { campaignname } = e.target;
    const campaign = {
      name: campaignname.value,
    };
    fetch(`${config.API_ENDPOINT}api/campaign`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((campaign) => {
        alert("Your campaign has been added to your account");
        e.target.reset();
        this.context.addCampaign(campaign);
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <div>
        Create Campaign
        <form>
          <fieldset>
            <label>Campaign Name: {""}</label>
            <input
              type="text"
              placeholder="campaign"
              id="campaign"
              required
              aria-required="true"
              aria-label="campaign name"
              name="campaignname"
            />
            <button type="submit">Add Campaign</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
