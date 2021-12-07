import React, { Component } from "react";

import "./Post.css";

class Post extends Component {

  render() {

    return <article className="Post" ref="Post">

        <header>

          <div className="Post-user">

            <div className="Post-user-profilepicture">

              <div className="Post-user-avatar-img"></div>

            </div>

            <div className="Post-user-nickname">

              <span>{this.props.nickname}</span>

            </div>

          </div>

        </header>

        <div className="Post-image">

          <div className="Post-image-bg">

            <div className="Post-image-src" style={this.props.img}></div>

          </div>

        </div>

        <div className="Post-caption">

          <strong>{this.props.nickname} </strong> {this.props.caption}

        </div>

      </article>;

    }

}

export default Post;