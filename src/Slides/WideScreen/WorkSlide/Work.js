import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '01',
        projectName: 'Smart Walking Stick App',
        projectDesc: 'I developed a revolutionary Smart Walking Stick accompanied by an app, providing hands-free usage, utilizing advanced sensors to alert and assist the visually impaired by detecting obstacles with precision.',
        projectType: 'ANDROID APP',
        roles: ['UI Designer', 'Full Stack Developer'],
      },
      {
        number: '02',
        projectName: 'Anti-Piracy App',
        projectDesc: "Combats piracy, leverages bot-powered searches, real-time detection, & enforcement actions to protect and monitor copyright content. Provides content owners with actionable insights through intuitive data visualisation.",
        projectType: 'WEB APP',
        roles: ['UI/UX Designer', 'Full Stack Developer'],
      },
      {
        number: '03',
        projectName: 'Blendr',
        projectDesc: 'Innovative app that aims to revolutionize the dating and socialization experience. By forcusing on the aspect of human interaction: the comfort of group settings.',
        projectType: 'APP CONCEPT',
        roles: ['UI Designer'],
      },
      {
        number: '04',
        projectName: 'Smart Metrics Dashboard',
        projectDesc: 'During my internship at Octopus Energy, I created a Grafana Dashboard displaying key metrics from Airflow, showcasing my skills in DevOps, Data Engineering, Kubernetes administration, SQL and Python.',
        projectType: 'WEB APP',
        roles: ['DevOps', 'Data Engineering'],
      },
      {
        number: '05',
        projectName: 'Guess The Link',
        projectDesc: 'iOS game concept of a game where you must find the link betweeen the 4 images.',
        projectType: 'iOS GAME',
        roles: ['UI Designer', 'Front-end Developer'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
