import React from 'react'

const Header = () => {
  return (
    <div id="header-wrapper">

       <div style={{width: '100%',maxWidth: '1400px',margin: '0 auto'}} className="ui two column stackable grid">

        <div className="twelve wide column">
          <div id="header-logo" className="">
            <h1>LOGO</h1>
          </div>

        </div>

        <div className="four wide column">
          <div id="header-input">
            <div className="ui grid">
              <div className="two column grid">
                <div className="ui icon fluid input">
                  <div className="ui basic floating dropdown button">
                    <div className="text">How do I ...</div>
                      <i className="dropdown icon"></i>
                      <div className="menu">
                        <div className="item">This Organization</div>
                        <div className="item">Entire Site</div>
                      </div>
                    </div>
                      <input type="text" placeholder="Search..." />
                      <i className="angle down icon"></i>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
          
        

        <div id="sub-header-bar">
        </div>
    </div> 
    
  )
}

export default Header
