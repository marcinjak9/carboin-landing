import React from 'react'
import styled from 'styled-components'

const CtaWrapper = styled.section`
  padding: 5rem 0;

  .container {
    max-width: 700px;
  }

  .button {
    margin-top: 2rem;
  }
  p {
    font-size: 1.3rem;
  }
`

const Cta = () => {
  return (
    <CtaWrapper className="section has-background-link">
      <div className="container has-text-centered has-text-white">
        <h2 className="title has-text-white">Every transaction is a tree action</h2>
        <p>Decarbonize Bitcoin it’s possible and easy. All transactions are public in blockchain, so we can clean it and certify our carbon offset</p>
        <a href="#" className="button is-primary is-inverted is-large">Try carboinapp</a>
      </div>
    </CtaWrapper>
  )
}

export default Cta
