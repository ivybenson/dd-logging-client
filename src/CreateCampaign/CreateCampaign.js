import React from "react";
import Context from "../Context";
// import config from "../config";
// import TokenService from "../services/token-service";

export default class CreateCampaign extends React.Component {
  static contextType = Context;

  static defaultProps = {
    onAddCampaign: () => {},
  };

  addSetCampaign = (e) => {
    e.preventDefault();
    const campaign = {
      name: e.target.name.value,
      id: Math.floor(Math.random() * 100) + 1,
    };
    // fetch(`${config.API_ENDPOINT}api/campaign`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: `Bearer ${TokenService.getAuthToken()}`,
    //   },
    //   body: JSON.stringify(campaign),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       return res.json().then((error) => {
    //         throw error;
    //       });
    //     }
    //     return res.json();
    //   })
    //   .then((campaign) => {
    //     alert("Your campaign has been added to your account");
    //     e.target.reset();
    //     this.context.addCampaign(campaign);
    //   })
    //   .catch((error) => this.setState({ error }));

    this.context.addCampaign(campaign);
  };

  render() {
    return (
      <div>
        {this.context.campaign.id ? (
          <h3>
            Campaign: {this.context.campaign.name} - #{this.context.campaign.id}
          </h3>
        ) : (
          <div>
            Create Campaign
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
                <button type="submit">Add Campaign</button>
              </fieldset>
            </form>
          </div>
        )}
      </div>
    );
  }
}
