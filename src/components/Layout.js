import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children, colors }) => {
  const { title, description } = useSiteMetadata()
  const { bgcolor } = colors

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <div className="container" style={{backgroundColor: `${bgcolor}`}}>
        <Header />
        <div>{children}</div>
        <Footer colors={colors}/>
      </div>
    </div>
  )
}

export default TemplateWrapper
