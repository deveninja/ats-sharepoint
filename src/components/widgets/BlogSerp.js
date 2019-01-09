import React, { Component } from 'react'
import BlogSerpDetails from './BlogSerpDetails';

class BlogSerp extends Component {
  render() {
    return (
      <div id="blogserp-widget" className="ui segment widgets no-padding no-border">
        <div className="ui two column doubling stackable grid">
          <div className="column">
            <div className="ui segment widgets no-border">
              <BlogSerpDetails />
            </div>
          </div>
          <div className="column">
            <div className="ui segment widgets no-border">
              <BlogSerpDetails />
            </div>
          </div>
          <div className="column">
            <div className="ui segment widgets no-border">
              <BlogSerpDetails />
            </div>
          </div>
          <div className="column">
            <div className="ui segment widgets no-border">
              <BlogSerpDetails />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogSerp
