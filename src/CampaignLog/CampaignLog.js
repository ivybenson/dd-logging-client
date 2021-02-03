import React from "react";
import Context from "../Context";

export default class CampaginLog extends React.Component {
  static contextType = Context;
  state = {
    error: null,
  };

  render() {
    const { posts = [] } = this.context;
    return (
      <div>
        <h2>Campagin Log</h2>

        <ul>
          {posts
            .filter((post) => !post.completed)
            .map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <p>
                  {post.character_name} on {post.datecreated}
                </p>
              </li>
            ))}
        </ul>
        <h2>Private</h2>
        <ul>
          {posts
            .filter((post) => post.completed)
            .filter((post) => post.character_id === this.context.character.id)
            .map((post) => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <p>
                  {post.character_name} on {post.datecreated}
                </p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
