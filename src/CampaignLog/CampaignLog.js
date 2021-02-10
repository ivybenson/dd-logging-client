import React from "react";
import Context from "../Context";

export default class CampaignLog extends React.Component {
  static contextType = Context;
  state = {
    error: null,
    publicHidden: true,
    privateHidden: true,
  };

  render() {
    const { posts = [] } = this.context;

    return (
      <div className="campaign-log-combined">
        <div
          className="public-log"
          onClick={() =>
            this.setState({ publicHidden: !this.state.publicHidden })
          }
        >
          <h2>Campaign Log</h2>
          {this.state.publicHidden && (
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
          )}
        </div>

        <div
          className="private-log"
          onClick={() =>
            this.setState({ privateHidden: !this.state.privateHidden })
          }
        >
          <h2>Private</h2>
          {this.state.privateHidden && (
            <ul>
              {posts
                .filter((post) => post.completed)
                .filter(
                  (post) => post.character_id === this.context.character.id
                )
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
          )}
        </div>
      </div>
    );
  }
}
