import React from "react";
import Context from "../Context";

export default class CreateCharacter extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        Create Character
        <form>
          <fieldset>
            <label>Character Name</label>
            <input></input>
          </fieldset>
          <fieldset>
            <label>Class</label>
            <input></input>
          </fieldset>
          <fieldset>
            <label>Race</label>
            <input type="text"></input>
          </fieldset>
          <fieldset>
            <label>Level</label>
            <input type="number"></input>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
