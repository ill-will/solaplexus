import React from 'react'
import Layout from '../components/Layout'

const colors = {bgcolor: "black", txtcolor: "grey", accolor: "tomato"}

const NotFoundPage = () => (

  <Layout colors={colors}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
