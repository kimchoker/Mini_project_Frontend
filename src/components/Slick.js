import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 슬라이더 컨테이너에 대한 스타일 정의
const SliderContainer = styled.div`
  font-family: 'Inter', sans-serif;
	width: 500px; /* 슬라이더의 너비 */
  height: 500px; /* 슬라이더의 높이 */
  margin-top: -100px;

	h2 {
		transform: skew(-10deg);
		color: #395144;
	}

	@media(max-width: 768px) {
		
		margin-left: 25px;
		width: 100%;
		padding-bottom: 80%;
	}
`;

// 슬라이더 내부 요소에 대한 스타일 정의
const SliderItem = styled.div`
  width: 480px;
  height: 480px;
	

	div {
		width: 480px;
  	height: 480px;
	}
	.a {
		background-color: blue;
	}
	.b {
		background-color: red;
	}
	.c {
		background-color: yellow;
	}
	.d {
		background-color: aliceblue;
	}
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
						<div className="a">
							<h3>1</h3>
						</div>
            
          </SliderItem>
          <SliderItem>
						<div className="b">
							<h3>2</h3>
						</div>
            
          </SliderItem>
          <SliderItem>
						<div className="c">
							<h3>3</h3>
						</div>
            
          </SliderItem>
          <SliderItem>
						<div className="d">
							<h3>4</h3>
						</div>
            
          </SliderItem>
        </Slider>
      </SliderContainer>
    );
  }
}
