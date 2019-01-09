import React from 'react'

const Footer = () => {
  return (
    <div 
        style={{width: '100%',maxWidth: '1400px',margin: '0 auto'}} 
        className="ui two column stackable grid"
        id="footer"
      >
        
        <div className="ten wide column">
          <div className="ui grid">
            <div className="ui twelve wide column">
              <div className="ui four column doubling stackable grid">
                <div className="column">
                  <h3>Items here</h3>
                </div>
                <div className="column">
                  <h3>Items here</h3>
                </div>
                <div className="column">
                  <h3>Items here</h3>
                </div>
                <div className="column">
                  <h3>Items here</h3>
                </div>
              </div>
            </div>
         
            <div className="ui four wide column">
              <div className="column">
                <h3>Items here</h3>
                <h3>Items here</h3>
                <h3>Items here</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="six wide column">
            <div className="ui two column grid">
              <div className="column">
                <div className="ui fluid card widgets no-border">
                  <div className="image">
                    <img src="https://jfsrichmond.org/wp-content/uploads/2016/06/Image_Placeholder_Featured-Image_Rectangle.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="ui fluid card widgets no-border">
                  <div className="image">
                    <img src="https://jfsrichmond.org/wp-content/uploads/2016/06/Image_Placeholder_Featured-Image_Rectangle.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
