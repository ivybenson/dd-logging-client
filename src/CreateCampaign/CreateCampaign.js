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
            <label>Campaign Name</label>
            <input></input>
          </fieldset>
          <fieldset>
            <label>Start Date</label>
            <input></input>
          </fieldset>
        </form>
      </div>
    );
  }
}
