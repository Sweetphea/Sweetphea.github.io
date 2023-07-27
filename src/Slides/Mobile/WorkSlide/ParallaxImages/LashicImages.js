import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import antiPiracyLightDashImg from '../../../../Assets/Images/AntiPiracy/LightDash.png';
import antiPiracyDarkDashImg from '../../../../Assets/Images/AntiPiracy/DarkDash.png';

const LightDash = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const DarkDash = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.62)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

class LashicImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <LightDash src={antiPiracyLightDashImg} scroll={scrollPercent} alt="antiPiracyLightDash" />
        <DarkDash src={antiPiracyDarkDashImg} scroll={scrollPercent} alt="antiPiracyDarkDash" />
      </React.Fragment>
    );
  }
}

LashicImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default LashicImages;
