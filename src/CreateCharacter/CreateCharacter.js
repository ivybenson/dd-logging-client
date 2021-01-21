import React from "react";
import Context from "../Context";
// import config from "../config";
// import TokenService from "../services/token-service";

export default class CreateCharacter extends React.Component {
  static contextType = Context;

  addSetCharacter = (e) => {
    e.preventDefault();
    const { name, characterclass, race, level } = e.target;
    const character = {
      name: name.value,
      characterclass: characterclass.value,
      race: race.value,
      level: level.value,
    };
    // fetch(`${config.API_ENDPOINT}api/character`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: `Bearer ${TokenService.getAuthToken()}`,
    //   },
    //   body: JSON.stringify(character),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       return res.json().then((error) => {
    //         throw error;
    //       });
    //     }
    //     return res.json();
    //   })
    //   .then((character) => {
    //     alert("Your character has been added to your account.");
    //     e.target.reset();
    //     this.context.addCharacter(character);
    //   })
    //   .catch((error) => this.setState({ error }));

    this.context.addCharacter(character);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        {this.context.character.name ? (
          <h3>
            You are {this.context.character.name} a{" "}
            {this.context.character.race}{" "}
            {this.context.character.characterclass}, Level{" "}
            {this.context.character.level}
          </h3>
        ) : (
          <div>
            Create Character
            <form onSubmit={this.addSetCharacter}>
              <fieldset>
                <label>Name: {""}</label>
                <input
                  type="text"
                  placeholder="Legolas"
                  id="name"
                  required
                  aria-required="true"
                  aria-label="character name"
                  name="name"
                />

                <label>Class: {""}</label>
                <input
                  type="text"
                  placeholder="Ranger"
                  id="class"
                  required
                  aria-required="true"
                  aria-label="character class"
                  name="characterclass"
                />

                <label>Race: {""}</label>
                <input
                  type="text"
                  placeholder="Elf"
                  id="race"
                  required
                  aria-required="true"
                  aria-label="character race"
                  name="race"
                />

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
                />
                <button type="submit">Submit</button>
              </fieldset>
            </form>
          </div>
        )}
      </div>
    );
  }
}
