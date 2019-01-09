import React, { Component } from 'react'

class BlogSerpDetails extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="ui widgets serps two column stackable grid blog-excerpt">
        <div 
          className="five wide column"
          style={{
            backgroundImage: 'url("https://semantic-ui.com/images/wireframe/image.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            minHeight: '130px'
          }}
        >
        
        </div>
        <div className="eleven wide column">
          <div className="">
            <div className="content">
              <div className="header">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, enim.</h3>
              </div>
              <div className="meta">
                <h4 style={{color: 'rgba(9,9,9,0.7)'}}>Serp Sub title</h4>
                <div className="description">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quae quos quo eius vel animi alias a et ipsum quas, laudantium quisquam cupiditate corporis nemo dolore sunt odio repellat, ducimus porro doloribus natus suscipit nesciunt reiciendis assumenda! Sapiente quae quam architecto voluptatibus ipsa temporibus nemo beatae! Maiores autem ipsum pariatur cupiditate aliquid at a alias minus ipsa iusto! Tempore eveniet nisi voluptatibus veritatis sed quaerat sequi repudiandae asperiores. Ex eaque commodi dolores asperiores illum pariatur, consequatur repudiandae harum atque enim quibusdam rem at blanditiis in. Saepe totam nisi facere, repudiandae dolores ea voluptate rem error culpa praesentium pariatur quisquam ab, cum minus earum corporis nostrum voluptatem modi. Perferendis qui ipsa incidunt eum eos asperiores natus minus est ratione. Veniam tenetur numquam cupiditate explicabo dignissimos ullam. Aliquam itaque ea corporis excepturi ratione incidunt asperiores corrupti maxime possimus explicabo vero et, soluta suscipit illum omnis vitae deleniti, distinctio numquam velit amet ut rerum debitis. Dolorem voluptatem rem ea necessitatibus repellat quae, odit quod! Porro unde nihil qui molestias earum delectus commodi et fuga vitae asperiores blanditiis nostrum voluptate placeat, laudantium ad, dolores recusandae magni? Cupiditate veritatis, amet voluptate aspernatur ratione fugiat iusto ipsam placeat eos voluptatum corporis? Voluptas, beatae. Voluptates, magni doloribus!
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
