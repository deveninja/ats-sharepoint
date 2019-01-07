import React, { Component } from 'react'

class BlogSerpDetails extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="ui widgets serps two column stackable grid">
        <div 
          className="six wide column"
          style={{
            backgroundImage: 'url("https://semantic-ui.com/images/wireframe/image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: '130px'
          }}
        >
        
        </div>
        <div className="ui ten wide column">
          <div className="">
            <div className="content">
              <div className="header">
                <h3>Blog Serp Title</h3>
              </div>
              <div className="meta">
                <h4>Serp Sub title</h4>
                <div className="description">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
                </div>
              </div>
            </div>
          </div>        
        </div>
      </div>
    )
  }
}

export default BlogSerpDetails
