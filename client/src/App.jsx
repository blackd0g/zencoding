import React, { Component } from 'react'
import moment from 'moment'
import styled, { keyframes } from 'styled-components'
import Scroll from 'react-scroll'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import logo from './resources/logo/logo-zen-480.png'
import background from './resources/background/coding-bg.png'
import zenBackground from './resources/background/zen-white.png'
import target from './resources/icon/target-cir.png'
import difficulty from './resources/icon/difficulty-cir.png'
import code from './resources/icon/code-cir.png'
import problem from './resources/icon/problem-cir.png'

import dummy from './models/dummyProblem'

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const Logo = styled.img`
  width: 400px;
  margin: auto;
  display: block;
`

const Header = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${background})
`

const CoverHeader = styled.div`
  padding-top: 100px;
  background-color: rgba(28,28,28,0.8);
  width: 100%;
  height: 100%;
`
const NameApp = styled.div`
  color: rgb(255,255,255);
  font-size: 50px;
  text-align:center;
  font-family: 'Rock Salt', cursive;
`
const DateNow = styled.div`
  color: rgba(255,255,255,0.9);
  font-size: 25px;
  text-align:center;
  font-family: 'Audiowide', sans-serif;
  padding: 40px;
  width: 400px;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: 10px;
`

const Title = styled(Element)`
  margin-top: 45px;
  color: rgb(255,255,255);
  font-size: 40px;
  text-align:center;
  font-family: 'Rock Salt', cursive;
`
const SubTitle = styled.h3`
  font-family: 'Audiowide', sans-serif;
  color: white;
`

const fadein = keyframes`
  from {
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
`

const bigger = keyframes`
  from {
    opacity: 0.3;
    border-radius: 50px;
  }

  to {
    opacity: 1;
    border-radius: 20px;
  }
`

const ShowMore = styled.button`
  background-color: rgba(0,0,0,0.0);
  display: inline-block;
  animation: ${fadein} 0.7s alternate infinite;
  padding: 30px;
  border: 1px solid #ddd;
  font-size: 25px;
  color: white;
  border-radius: 50px;
  margin: auto;
  font-family: 'Audiowide', sans-serif;
  margin-top: 100px;
  
  &:hover {
     animation: ${bigger} 0.3s alternate infinite;
     cursor: pointer;
  }

`

const StartButton = styled(ShowMore)`
  margin-top: 150px;
`

const Center = styled.div`
  text-align: center
`

const Section = styled.div`
  height: 300px;
  animation: ${fadein} 2s alternate;
`

const SectionGenerate = styled.div`
  height: 400px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-image: url(${zenBackground});
  background-position: center;
  text-align: center;
`

const Setting = styled(Grid)`
  margin-top: 50px;
  padding: 40px;
`

const Img150 = styled.img`
  width: 150px;
  padding-top: 10px;
`

const Img100 = styled.img`
  width: 100px;
  padding-top: 10px;
`

const Result = styled.code`
  font-size: 20px;
  padding: 20px;
  animation: ${fadein} 2s alternate;
`

const Problem = styled(Col)`
  margin-top: 20px;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 30px;
`
const BasicResult = styled(Row)`
  padding: 10px;
  padding-bottom: 40px;
  margin-bottom: 20px;
  border-radius: 30px;
  border: 1px solid #ddd;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment().format('dddd d MMMM'),
      inday: moment().format('hh : mm : ss'),
      status: 'preload'
    }
    this.tickClock = this.tickClock.bind(this)
    this.generateResult = this.generateResult.bind(this)
    this.generateResult2 = this.generateResult2.bind(this)
    this.tickClock()
  }

  tickClock() {
    setInterval(() => {
      this.setState({
        date: moment().format('dddd d MMMM'),
        inday: moment().format('hh : mm : ss')
      })
    }, 1000);
  }

  generateResult() {
    this.setState({
      status: 'generated'
    })
  }

  generateResult2() {
    this.setState({
      status: 'preload'
    })
  }

  render() {
    return (
      <div>
        <Header>
          <CoverHeader>
            <Logo src={logo} />
            <NameApp>
              Zen Coding
            </NameApp>
            <Center>
              <Link
                activeClass="active"
                to="nowDate"
                spy
                smooth
                offset={0}
                duration={1000}
                onSetActive={this.handleSetActive}
              >
                <ShowMore>
                  Show More !
                </ShowMore>
              </Link>
            </Center>
          </CoverHeader>
        </Header>
        <Section>
          <Title name="nowDate" > Now Date </Title>
          <DateNow>
            {this.state.date}
            <br />
            {this.state.inday}
          </DateNow>
        </Section>
        <SectionGenerate>
          <Link
            activeClass="active"
            to="result"
            spy
            smooth
            offset={0}
            duration={1000}
            onSetActive={this.handleSetActive}
          >
            <StartButton onClick={this.generateResult}>
              Start !
            </StartButton>
          </Link>
        </SectionGenerate>
        {
          this.state.status === 'generated' &&
          (<div>
            <Section style={{ height: '800px' }}>
              <Title name="result" > Result </Title>
              <Setting>
                <BasicResult className="show-grid">
                  <Col xs={12} md={4}>
                    <Col xs={12} md={4}>
                      <Img100 alt="target" src={target} />
                    </Col>
                    <Col xs={12} md={8}>
                      <SubTitle>Target</SubTitle>
                      <br />
                      <Result> {dummy[0].target} </Result>
                    </Col>
                  </Col>
                  <Col xs={12} md={4}>
                    <Col xs={12} md={4}>
                      <Img100 alt="difficulty" src={difficulty} />
                    </Col>
                    <Col xs={12} md={8}>
                      <SubTitle>Difficulty</SubTitle>
                      <br />
                      <Result> {dummy[0].difficulty} </Result>
                    </Col>
                  </Col>
                  <Col xs={12} md={4}>
                    <Col xs={12} md={4}>
                      <Img100 alt="language" src={code} />
                    </Col>
                    <Col xs={12} md={8}>
                      <SubTitle>Language</SubTitle>
                      <br />
                      <Result> {dummy[0].language} </Result>
                    </Col>
                  </Col>
                </BasicResult>
                <Problem xs={12} md={12}>
                  <Col xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Img150 alt="problem" src={problem} />
                  </Col>
                  <Col xs={12} md={8} style={{ borderLeft: '1px solid #ddd' }}>
                    <SubTitle> {dummy[0].problem} ! </SubTitle>
                    <br />
                    <Result> {dummy[0].description} </Result>
                  </Col>
                </Problem>
                <Link
                  activeClass="active"
                  to="result"
                  spy
                  smooth
                  offset={0}
                  duration={1000}
                  onSetActive={this.handleSetActive}
                >
                  <center>
                    <StartButton style={{ marginTop: '30px' }} onClick={this.generateResult2}>
                      New item !
                    </StartButton>
                  </center>
                </Link>
              </Setting>
            </Section>
          </div>)
        }{
          this.state.status === 'preload' &&
          (
            <Section>
              <Center>
                <Title name="result">
                  Click {'\''} Start {'\''} to get result.
                </Title>
              </Center>
            </Section>
          )
        }
      </div>
    )
  }
}


export default App
