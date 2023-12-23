import React, { Component } from 'react';
import Slider from 'react-slick';

export default class CustomImageSlider extends Component {
  render() {
    const { mainImage, otherImages } = this.props;

    const settings = {
      customPaging: function (i) {
        // Render a custom pagination element for each image
        const image = i === 0 ? mainImage : otherImages[i - 1];
        return (
          <a>
            <img src={image.url} alt={`Image ${i}`} />
          </a>
        );
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={mainImage} alt="Main Image" />
          </div>
          {otherImages.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
