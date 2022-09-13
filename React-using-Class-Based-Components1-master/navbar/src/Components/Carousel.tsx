import React, { Component } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledImage } from "./Styling/Styling.styles";
import "./Carousel.css";
type MyState = { index: any; current: any; isNext: boolean; src: any };
type MyProps = {};

class Carousel extends Component<MyProps, MyState> {
  state: any = {
    items: [
      "https://www.xtrafondos.com/wallpapers/marcha-imperial-star-wars-4496.jpg",
      "https://www.activeblogs.com/wp-content/uploads/2019/12/mando.jpg",
      "https://www.gamespot.com/a/uploads/screen_kubrick/171/1712892/3389880-0.%20millennium%20falcon.jpg",
      "https://i.kym-cdn.com/photos/images/newsfeed/000/747/562/411.jpg",
      "https://i.etsystatic.com/19436399/r/il/743adf/2316830264/il_fullxfull.2316830264_sn1f.jpg",
    ],
    current: 0,
    isNext: true,
  };

  handlePrev = () => {
    let index = this.state.current,
      length = this.state.items.length;

    if (index < 1) {
      index = length;
    }

    index = index - 1;

    this.setState({
      current: index,
      isNext: false,
    });
  };

  handleNext = () => {
    let index = this.state.current,
      length = this.state.items.length - 1;

    if (index == length) {
      index = -1;
    }
    index = index + 1;

    this.setState({
      current: index,
      isNext: true,
    });
  };
  render() {
    let index = this.state.current,
      isNext = this.state.isNext,
      src = this.state.items[index];
    return (
      <div className="carousel" key={index}>
        <StyledImage src={src} />
        <ArrowBackIosIcon
          className="previous"
          onClick={() => this.handlePrev()}
        ></ArrowBackIosIcon>
        <ArrowForwardIosIcon
          onClick={() => this.handleNext()}
          className="next"
        ></ArrowForwardIosIcon>
      </div>
    );
  }
}

export default Carousel;
