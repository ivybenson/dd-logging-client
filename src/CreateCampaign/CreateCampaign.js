import React from "react";
import Context from "../Context";

export default class CreateCampaign extends React.Component {
  static contextType = Context;
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
              name="campaign"
            />
            <button type="submit">Add Campaign</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
