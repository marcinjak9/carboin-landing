import React, { useEffect } from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.section`
  position: relative;
  height: 95vh;
  .hero-body {
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 3rem;
  }
  .subtitle {
    font-size: 2rem;
  }

  .animation-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    svg {
      height: auto;
      width: 100%;
    }
  }

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: rgba(0, 0, 0, 0.7); */
    /* background: rgb(2,0,36); */
    z-index: 2;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.562062324929972) 50%, rgba(255,255,255,0) 100%);
  }

  @media (max-width: 700px) {
    height: 50vh;
  }
`

const Hero = () => {
  let ref = React.createRef();
  useEffect(() => {
    const anim = window.lottie.loadAnimation({
      container: ref.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/static/Bitcoin_Farm.json', // the path to the animation json
      rendererSettings: {
        preserveAspectRatio: 'xMaxYMax slice', // Supports the same options as the svg element's preserveAspectRatio property
        className: 'farm'
      }
    });
    anim.setSubframe(false)
  }, [])
  return (
    <HeroWrapper className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white">
            Coin is in the air
          </h1>
          <h2 className="subtitle has-text-white">
            Carboin is your Bitcoin carbon offset
          </h2>
        </div>
      </div>
      <div className="animation-bg" ref={ref}></div>
      <div className="overlay"></div>
    </HeroWrapper>
  )
}

export default Hero
