import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import grafanaGrafana2Img from '../../../../Assets/Images/Grafana/Grafana2.png';
import grafanaGrafanadashImg from '../../../../Assets/Images/Grafana/Grafanadash.png';


const Grafana2 = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-70vh;
left: -18vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const Grafanadash = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.44)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -40vh;
right:-19vw;
/* border: 1px dashed red; */
height: 80vh; 
filter: blur(0.6px);
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
