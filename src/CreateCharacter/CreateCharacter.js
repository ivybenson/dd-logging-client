import React from "react";
import Context from "../Context";
import config from "../config";
import TokenService from "../services/token-service";

export default class CreateCharacter extends React.Component {
  static contextType = Context;

  state = this.context.character;

  addSetCharacter = (e) => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT_TEST}api/character/${this.state.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((character) => {
        e.target.reset();
        this.context.addCharacter(character);
        this.props.history.push("/dashboard");
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <div className="create-character">
        <h2>Create Character</h2>
        <form onSubmit={this.addSetCharacter}>
          <fieldset>
            <p>
              <label>Name: {""}</label>
              <input
                type="text"
                placeholder="Legolas"
                id="name"
                required
                aria-required="true"
                aria-label="character name"
                name="name"
                value={this.state.name || ""}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </p>
            <p>
              <label>Class: {""}</label>
              <input
                type="text"
                placeholder="Ranger"
                id="class"
                required
                aria-required="true"
                aria-label="character class"
                name="characterClass"
                value={this.state.characterClass || ""}
                onChange={(e) =>
                  this.setState({ characterClass: e.target.value })
                }
              />
            </p>
            <p>
              <label>Race: {""}</label>
              <input
                type="text"
                placeholder="Elf"
                id="race"
                required
                aria-required="true"
                aria-label="character race"
                name="race"
                value={this.state.race || ""}
                onChange={(e) => this.setState({ race: e.target.value })}
              />
            </p>
            <p>
              <label>Level: {""}</label>
              <input
                type="number"
                min="1"
                max="20"
                placeholder="1"
                id="level"
                required
                aria-required="true"
                aria-label="character level"
                name="level"
                value={this.state.level || ""}
                onChange={(e) => this.setState({ level: e.target.value })}
              />
            </p>
            <p>
              <label>Items: {""}</label>
              <input
                type="textbox"
                placeholder="Notes"
                id="additionalInfo"
                required
                aria-required="true"
                aria-label="additional info"
                name="additionalInfo"
                value={this.state.additionalInfo || ""}
                onChange={(e) =>
                  this.setState({ additionalInfo: e.target.value })
                }
              />
            </p>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
