import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import antiPiracyLightDashImg from '../../../../Assets/Images/AntiPiracy/LightDash.png';
import antiPiracyDarkDashImg from '../../../../Assets/Images/AntiPiracy/DarkDash.png';

const LightDash = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%) scale(0.74)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
left: -2vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const DarkDash = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.74)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
right:0vw;
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
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
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