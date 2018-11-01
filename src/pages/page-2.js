import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image2'

const SecondPage = () => (
  <Layout>
    <h1>Hi from my other cat</h1>
    <p>As promised, here he is</p>
    <Image />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
