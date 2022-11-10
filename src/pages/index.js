// Step 1: Import dependencies, like React, Link, etc
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Lorem ipsum dolor sit amet.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull."
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

// Export constantants
export const Head = () => <title>Gatsby 5 Tut</title>

// Step 3: Export component
export default IndexPage
