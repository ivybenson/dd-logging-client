import React from "react";
import ReactDOM from "react-dom";
import CreateCampaign from "./CreateCampaign";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CreateCampaign />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
