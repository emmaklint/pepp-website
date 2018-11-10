import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'

const Apply = () => (
  <Page>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
)

export default Apply
