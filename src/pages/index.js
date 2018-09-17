import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import Section from '../components/section';
import Wave from '../components/waves';
import staticdata from '../../staticdata.json'
import Cell from '../components/cell';
import styled from 'styled-components'

const SectionCaption = styled.h2`
  font-weight: 700;
  font-size: 50px;
  text-align:center;
`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="hero__group">
        <h1>First take on using react and Gatsby</h1>
        <p>I think it's awesome so far, I'll try to use it more often.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <Wave/>
      </div>
    </div>

    <div className="Cards">
      <h2>Cards section</h2>

      <div className="CardGroup">
        <Card image={require('../images/bg3.jpg')} title="Title" text="text" />
        <Card image={require('../images/bg3.jpg')} title="Title" text="text" />
        <Card image={require('../images/bg3.jpg')} title="Title" text="text" />
        <Card image={require('../images/bg3.jpg')} title="Title" text="text" />
        <Card image={require('../images/bg3.jpg')} title="Title" text="text" />
      </div>
    </div>
  <Section
    image={require('../images/bg2.jpg')}
    logo={require('../images/logo-framer.png')}
    title="Title"
    text="text"
  />

  <SectionCaption>Caption</SectionCaption>
  <SectionCellGroup>
  {staticdata.cells.map(cell =>  (
    <Cell
    title={cell.title}
    image={cell.image}
    />
  ))}
  </SectionCellGroup>

  </div>
)

export default IndexPage
