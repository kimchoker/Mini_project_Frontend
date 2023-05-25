import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 슬라이더 컨테이너에 대한 스타일 정의
const SliderContainer = styled.div`
  font-family: 'Inter', sans-serif;
	width: 400px; /* 슬라이더의 너비 */
  height: 400px; /* 슬라이더의 높이 */
  margin-top: -200px;

	h2 {
		transform: skew(-10deg);
		color: #395144;
	}
`;

// 슬라이더 내부 요소에 대한 스타일 정의
const SliderItem = styled.div`
  width: 480px;
  height: 480px;
	
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <SliderContainer>
        <h2>Weekly Best Lineup</h2>
        <Slider {...settings}>
          <SliderItem>
            <h3>1</h3>
          </SliderItem>
          <SliderItem>
            <h3>2</h3>
          </SliderItem>
          <SliderItem>
            <h3>3</h3>
          </SliderItem>
          <SliderItem>
            <h3>4</h3>
          </SliderItem>
        </Slider>
      </SliderContainer>
    );
  }
}
