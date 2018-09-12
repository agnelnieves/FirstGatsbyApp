import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello World!</h1>
    <p>This is my first take on React</p>
    <h3>Technologies used:</h3>
    <ul>
      <li>React Js</li>
      <li>Webpack</li>
      <li>GraphQL</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
