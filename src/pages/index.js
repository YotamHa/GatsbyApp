import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>This is my cat, she is great.</p>
    <p>In the other page you will find a picture of my other cat, who is also great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">I wanna see your other cat!</Link>
  </Layout>
)

export default IndexPage
