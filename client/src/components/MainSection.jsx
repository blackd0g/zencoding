import React from 'react'
import Scroll from 'react-scroll'

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const Section = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  const scrollTo = () => {
    scroll.scrollTo(100);
  }

  const scrollMore = () => {
    scroll.scrollMore(100);
  }

  const handleSetActive = (to) => {
    console.log(to);
  }

  return (
    <div>
      <Link activeClass="active"
        to="test1"
        spy
        smooth
        offset={0}
        duration={500}
        onSetActive={this.handleSetActive}
      >
        Test 1
      </Link>
      <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
        Test 2 (delay)
      </Link>

      <Element style={{ height: '800px' }} name="test1" className="element">
        test 1
      </Element>

      <Element name="test2" className="element">
        test 2
      </Element>

      <Link to="firstInsideContainer" containerId="containerElement">
        Go to first element inside container
      </Link>

      <Link to="secondInsideContainer" containerId="containerElement">
        Go to second element inside container
      </Link>
      <div className="element" id="containerElement">
        <Element name="firstInsideContainer">
          first element inside container
        </Element>

        <Element name="secondInsideContainer">
          second element inside container
        </Element>
      </div>

      <button onClick={() => scrollToTop()}>To the top!</button>
      <br />
      <button onClick={() => scrollToBottom()}>To the bottom!</button>
      <br />
      <button onClick={() => scrollTo()}>Scroll to 100px from the top</button>
      <br />
      <button onClick={() => scrollMore()}>Scroll 100px more from the current position!</button>
    </div>
  )
}

export default Section
