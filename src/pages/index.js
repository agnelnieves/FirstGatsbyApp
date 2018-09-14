import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section';
import Wave from '../components/Waves';

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

  </div>
)

export default IndexPage
