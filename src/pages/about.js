import * as React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Lorem, ipsum dolor.</p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage