import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 10rem 1.5rem 5rem 1.5rem;

  .title {
    font-size: 2.5rem;
  }
`

const PageTitle = () => {
  return (
    <Wrapper className="section">
      <div className="container">
        <h2 className="title has-text-centered has-text-success">What Carboin do</h2>
      </div>
    </Wrapper>  
  )
}

export default PageTitle
