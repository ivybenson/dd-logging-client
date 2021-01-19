import React from "react";

export default function LandingPage(props) {
  return (
    <div className="landingPage">
      <h2>Welcome to Dungeons Truth.</h2>
      <p>Log in or sign up to start telling your story.</p>
      <p>
        Create a campagin and invite your campagin team members. You can create
        your character with their name, class, race, and level. From there
        within the campaign your character can post both publicly and privately.
        Public posts will come from all campaign members to come together and
        tell your story and track your campagin's progress. Private posts can
        help players track what special items they have picked up, private
        feelings about NPCs and other characters, and updates they want to keep
        to themselves. Add your team members and tell your story.
      </p>
      <button
        className="landingpage-btn"
        type="submit"
        // onClick={(e) => props.history.push("/signup")}
      >
        Get Started
      </button>
    </div>
  );
}
