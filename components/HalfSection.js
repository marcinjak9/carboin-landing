import React, { useEffect } from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'


const addLineBreaks = string =>
  string.split('\\n').map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));

const positionPadding = (position) => {
  if (position === 'first') {
    return '5rem 1.5rem 10rem 1.5rem'
  }
  if (position === 'small') {
    return '5rem 1.5rem'
  }
  // if (position === 'last') {
  //   return '10rem 1.5rem 5rem 1.5rem'
  // }
  return '10rem 1.5rem'
}

const Wrapper = styled.section`
  padding: ${props => positionPadding(props.position)};
  svg {
    max-height: 400px;
    max-width: ${props => (props.animationSmall ? '200px' : '300px')};
    overflow: visible;
  }

  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .animation {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 1.3rem;
  }
  a {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .photo {
    height: 250px;
    max-width: 500px;
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 6px;
  }

  @media (max-width: 700px) {
    padding: 4rem 1.5rem;
  }
`

const HalfSection = ({
  title, body, animation, direction, cta, animationSmall, position, image
}) => {
  let ref = React.createRef();
  useEffect(() => {
    if (animation) {
      const anim = window.lottie.loadAnimation({
        container: ref.current, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animation, // the path to the animation json
        rendererSettings: {
          preserveAspectRatio: 'xMaxYMax slice', // Supports the same options as the svg element's preserveAspectRatio property
          className: 'farm'
        }
      });
      anim.setSubframe(false)
    }
  }, [])
  return (
    <Wrapper className="section" animationSmall={animationSmall} position={position}>
      <div className="container">
        <div className="columns">
          <MediaQuery maxDeviceWidth={700}>
            <div className="column">
              <div className="animation" ref={ref}></div>
              {image && <div className="photo-wrapper"><div className="photo" style={{ backgroundImage: `url(${image})`}} /></div>}
            </div>
          </MediaQuery>
          {direction === 'left' ? (
            <>
            <MediaQuery minDeviceWidth={701}>
              <div className="column">
                <div className="animation" ref={ref}></div>
                {image && <div className="photo-wrapper"><div className="photo" style={{ backgroundImage: `url(${image})`}} /></div>}
              </div>
            </MediaQuery>
            <div className="column">
              <h2 className="title">{title}</h2>
              <p>{addLineBreaks(body)}</p>
              {(cta && cta.text) && <a href={cta.url} className="is-link">{cta.text}</a>}
            </div>
            </>
          ) : (
            <>
            <div className="column">
              <h2 className="title">{title}</h2>
              <p>{addLineBreaks(body)}</p>
              {(cta && cta.text) && <a href={cta.url} className="is-link">{cta.text}</a>}
            </div>
            <MediaQuery minDeviceWidth={701}>
              <div className="column">
                <div className="animation" ref={ref}></div>
                {image && <div className="photo-wrapper"><div className="photo" style={{ backgroundImage: `url(${image})`}} /></div>}
              </div>
            </MediaQuery>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default HalfSection
