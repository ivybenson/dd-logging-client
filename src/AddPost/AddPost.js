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
    const { title, content } = e.target;
    const post = {
      id: this.context.posts.length + 1,
      title: title.value,
      content: content.value,
    };
    fetch(`${config.API_ENDPOINT}api/post`, {
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
        alert("Your post has been added to the campaign");
        e.target.reset();
        this.context.addPost(post);
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <div className="add-post">
        <form className="add-post-form" onSubmit={this.addNewPost}>
          <p>
            Title
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
          <input
            type="text"
            id="content"
            placeholder="thoughts about campaign"
            aria-required="true"
            aria-label="post-content"
            name="content"
          />

          <button className="add-post-button" type="submit">
            Add Post
          </button>
        </form>
      </div>
    );
  }
}
