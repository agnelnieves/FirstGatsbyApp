import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
  <div className="hero">
    <div className="hero__group">
    <h1>First take on using react and Gatsby</h1>
    <p>I think it's awesome so far, I'll try to use it more often.</p>
    <Link to="/page-2/">Go to page 2</Link>
    </div>
  </div>
  </div>
)

export default IndexPage
