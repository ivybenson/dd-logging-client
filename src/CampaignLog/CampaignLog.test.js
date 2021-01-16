import React from "react";
import ReactDOM from "react-dom";
import CampaignLog from "./CampaignLog";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CampaignLog />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
