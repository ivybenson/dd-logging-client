import React from "react";
import Context from "../Context";
import config from "../config";
import TokenService from "../services/token-service";

export default class CreateCharacter extends React.Component {
  static contextType = Context;

  createCharacter = (e) => {
    e.preventDefault();
    const { name, characterclass, race, level } = e.target;
    const character = {
      id: this.context.characters.length + 1,
      name: name.value,
      characterclass: characterclass.value,
      race: race.value,
      level: level.value,
    };
    fetch(`${config.API_ENDPOINT}api/character`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(character),
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
        alert("Your character has been added to your account.");
        e.target.reset();
        this.context.addCharacter(character);
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <div>
        Create Character
        <form onSubmit={this.createCharacter}>
          <fieldset>
            <label>Name: {""}</label>
            <input
              type="text"
              placeholder="name"
              id="name"
              required
              aria-required="true"
              aria-label="character name"
              name="name"
            />

            <label>Class: {""}</label>
            <input
              type="text"
              placeholder="class"
              id="class"
              required
              aria-required="true"
              aria-label="character class"
              name="characterclass"
            />

            <label>Race: {""}</label>
            <input
              type="text"
              placeholder="race"
              id="race"
              required
              aria-required="true"
              aria-label="character race"
              name="race"
            />

            <label>Level: {""}</label>
            <input
              type="integer"
              min="1"
              placeholder="1"
              id="level"
              required
              aria-required="true"
              aria-label="character level"
              name="level"
            />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
