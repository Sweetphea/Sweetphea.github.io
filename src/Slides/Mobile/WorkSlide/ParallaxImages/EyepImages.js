import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import grafanaGrafana2Img from '../../../../Assets/Images/Grafana/Grafana2.png';
import grafanaGrafanadashImg from '../../../../Assets/Images/Grafana/Grafanadash.png';


const Grafana2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 22}%) scale(0.65)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -320vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 100vh; 
`;

const Grafanadash = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 6}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -180vh;
transform-origin: right center;
right:2vw;
/* border: 1px dashed red; */
height: 100vh; 
`;

class EyepImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <Grafana2 src={grafanaGrafana2Img} scroll={scrollPercent} alt="grafanaGrafana2" />
        <Grafanadash src={grafanaGrafanadashImg} scroll={scrollPercent} alt="grafanaGrafanadash" />
      </React.Fragment>
    );
  }
}

EyepImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default EyepImages;
