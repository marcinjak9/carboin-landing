import React from "react";
import styled from 'styled-components'

const Wrapper = styled.section`
  .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const SimpleHero = ({
  title, subtitle, image
}) => {
  return (
    <Wrapper className="hero is-medium is-success is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title">{title}</h1>
              <h2 className="subtitle">{subtitle}</h2>
            </div>
            <div className="column">
              {image && <img src={image} alt=""/>}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SimpleHero;
