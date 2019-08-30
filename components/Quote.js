import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 10rem 1.5rem;

  .container {
    max-width: 700px;
  }
  
  p {
    font-size: 1.5rem;
    color: #fff;
    margin: 2rem 0;
  }

  strong {
    color: #fff;
  }
`

const Quote = ({
  title, children
}) => {
  return (
      <Wrapper className="section has-background-success">
        <div className="container has-text-white has-text-centered content">
          <h2 className="title has-text-white">
            {title}
            </h2>
          {children}
        </div>
      </Wrapper>
  )
}

export default Quote
