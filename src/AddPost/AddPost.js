import React from "react";

import Context from "../Context";
import config from "../config";
import TokenService from "../services/token-service";

export default class AddPost extends React.Component {
  static contextType = Context;

  static defaultProps = {
    onAddPost: () => {},
  };

  state = {
    error: null,
  };

  addNewPost = (e) => {
    e.preventDefault();
    const { title, content, postType } = e.target;

    const post = {
      id: this.context.posts.length + 1,
      campaign_id: this.context.campaign.id,
      character_id: this.context.character.id,
      character_name: this.context.character.name,
      title: title.value,
      content: content.value,
      private: postType.checked,
    };
    fetch(`${config.API_ENDPOINT_TEST}api/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((post) => {
        e.target.reset();
        this.context.addPost(post);
        this.context.getPosts();
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <div className="add-post">
        <form className="add-post-form" onSubmit={this.addNewPost}>
          <p>
            Title: {""}
            <input
              type="text"
              placeholder="title"
              id="post-title"
              required
              aria-required="true"
              aria-label="add your thoughts"
              name="title"
            />
          </p>
          <p>Thoughts: {""} </p>
          <input
            type="text"
            id="content"
            placeholder="thoughts about campaign"
            aria-required="true"
            aria-label="post-content"
            name="content"
          />
          <p>
            <label htmlFor="postType">Private ?</label>
            <input type="checkbox" name="postType" id="postType" />
          </p>
          <button className="add-post-button" type="submit">
            Post
          </button>
        </form>
      </div>
    );
  }
}
