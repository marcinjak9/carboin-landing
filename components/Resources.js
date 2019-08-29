import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.section`
  h2.title {
    margin-bottom: 3rem;
  }
`

const Resources = () => {
  return (
    <Wrapper className="section has-background-primary">
      <div className="container">
        <h2 className="title has-text-centered has-text-white">Useful Resources 📚</h2>
        <div className="columns">
          <div className="column">
            <Card
              title="Estimating Bitcoin Electricity Use: A Beginner’s Guide | Coin Center"
              img="https://coincenter.org/thumbs/metatags/2019-05/electricity-report.png"
              body="Summarizing complexities and pitfalls in analyzing the electricity demand of new information technology, focusing on Bitcoin, the mostly widely used …"
              url="https://coincenter.org/entry/bitcoin-electricity"
            />
          </div>
          <div className="column">
            <Card
              title="Bitcoin Energy Consumption Index - Digiconomist"
              img="https://digiconomist.net/wp-content/uploads/2017/09/make-bitcoin-sustainable.jpg"
              body="The Bitcoin Energy Consumption Index provides the latest estimate of the total energy consumption of the Bitcoin network."
              url="https://digiconomist.net/bitcoin-energy-consumption"
            />
          </div>
          <div className="column">
            <Card
              title="One Bitcoin Transaction Consumes As Much Energy As Your House Uses in a Week"
              img="https://video-images.vice.com/articles/59fa17818e4e2008860fcd88/lede/1509563619492-shutterstock_669548110.jpeg?crop=1xw:0.843328335832084xh;center,center&resize=1200:*"
              body="As Bitcoin’s price increases, its energy consumption is soaring. Bitcoin's power consumption is extremely high compared to conventional digital payment, and one transaction now uses as much energy as your house in a week."
              url="https://www.vice.com/en_us/article/ywbbpm/bitcoin-mining-electricity-consumption-ethereum-energy-climate-change"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export const Card = ({ title, body, img, url }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-2by1">
        <img src={img} alt="Placeholder image" />
      </figure>
    </div>
    <div className="card-content">
      <p className="title is-4">
        {title}
      </p>
      <div className="content">
        {body}
      </div>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <span>
          <a
            href={url}
            target="_blank"
          >
            View
          </a>
        </span>
      </p>
    </footer>
  </div>
)

export default Resources
