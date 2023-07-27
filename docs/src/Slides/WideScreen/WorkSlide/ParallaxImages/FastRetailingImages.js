import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import smartWalkDLImg from '../../../../Assets/Images/SmartWalk/DL.png';
import smartWalkHMImg from '../../../../Assets/Images/SmartWalk/HM.png';
import smartWalkPfImg from '../../../../Assets/Images/SmartWalk/Pf.png';
import smartWalkVPImg from '../../../../Assets/Images/SmartWalk/VP.png';


const SmartWalkVP = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
top: 90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const SmartWalkHM = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
top:45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const SmartWalkPf = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
top:75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.8px);
`;

const SmartWalkDL = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
top: 55vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class FastRetailingImages extends Component {
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
        <SmartWalkDL src={smartWalkDLImg} scroll={scrollPercent} alt="smartWalkDL" />
        <SmartWalkHM src={smartWalkHMImg} scroll={scrollPercent} alt="smartWalkHM" />
        <SmartWalkVP src={smartWalkVPImg} scroll={scrollPercent} alt="smartWalkVP" />
        <SmartWalkPf src={smartWalkPfImg} scroll={scrollPercent} alt="smartWalkPf" />
      </React.Fragment>
    );
  }
}

FastRetailingImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default FastRetailingImages;
