import React from "react";
import Context from "../Context";

export default class PrivateLog extends React.Component {
  static contextType = Context;

  render() {
    const { posts = [] } = this.context;
    return (
      <div>
        <h2>Private Log</h2>
        <ul>
          {posts.map((post) => (
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
