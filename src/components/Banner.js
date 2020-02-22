import React from 'react'
import '../styles/banner.scss';

function Banner(props) {
  var bannerImageURL = require('../images/' + props.imageURL + '-hero-image.jpg')

  const heroStyle = {
    backgroundImage: 'url(' + bannerImageURL + ')'
  }

  return (
    <div>
      <div style={heroStyle} class="imageDiv">
        <div className="centerme">
          <h1>Live your best life</h1>
          <p>
            <a href='Book' className='jumbotron-book-now-button'>
              Get Coaching
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner