import React from "react";
import Context from "../Context";
import Moment from "moment";

export default class CampaignLog extends React.Component {
  static contextType = Context;
  state = {
    error: null,
    publicOpen: true,
    privateOpen: true,
  };

  render() {
    const { posts = [] } = this.context;

    return (
      <div className="campaign-log-combined">
        <div
          className="public-log"
          onClick={() => this.setState({ publicOpen: !this.state.publicOpen })}
        >
          <h2>Campaign Log</h2>
          {this.state.publicOpen && (
            <ul>
              {posts
                .filter((post) => !post.completed)
                .map((post) => (
                  <li key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                    <p>
                      {post.character_name} on{" "}
                      {Moment(post.datecreated).format("MM-DD-YYYY")}
                    </p>
                  </li>
                ))}
            </ul>
          )}
        </div>

        <div
          className="private-log"
          onClick={() =>
            this.setState({ privateOpen: !this.state.privateOpen })
          }
        >
          <h2>Private Musings</h2>
          {this.state.privateOpen && (
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
                      {post.character_name} on{" "}
                      {Moment(post.datecreated).format("MM-DD-YYYY")}
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
