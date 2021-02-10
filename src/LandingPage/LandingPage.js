import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(props) {
  return (
    <div className="landingPage">
      <h2>Welcome</h2>
      <p>
        Create a campaign and invite your campaign team members with Dungeons
        Truth. You can create your character with their name, class, race, and
        level. From there within the campaign your character can post both
        publicly and privately. Public posts will come from all campaign members
        to come together and tell your story and track your campaign's progress.
        Private posts can help players track what special items they have picked
        up, private feelings about NPCs and other characters, and updates they
        want to keep to themselves. Add your team members and tell your story.
      </p>
      <Link to="/login">
        <button className="login-button" aria-label="login" type="submit">
          Get Started
        </button>
      </Link>
    </div>
  );
}
