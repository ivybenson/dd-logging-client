import React from "react";
import Context from "../Context";

export default class CampaginLog extends React.Component {
  static contextType = Context;

  render() {
    const { posts = [] } = this.context;
    return (
      <div>
        <h2>Campagin Log</h2>

        <ul>
          {posts
            .filter((post) => !post.private)
            .map((post) => (
              <li key={post.id}>
                {post.title}

                <p>Reminder: {post.content}</p>
              </li>
            ))}
        </ul>
        <h2>Private Log</h2>
        <ul>
          {posts
            .filter((post) => post.private)
            .map((post) => (
              <li key={post.id}>
                {post.title}

                <p>Reminder: {post.content}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
