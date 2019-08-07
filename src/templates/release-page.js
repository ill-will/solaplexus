import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


const ReleasePage = ({ data, pageContext }) => {
  const { markdownRemark: release } = data
  console.log(pageContext)
  const prev = pageContext.prev
  const next = pageContext.next

  const bgcolor = release.frontmatter.bgcolor || "black"
  const txtcolor = release.frontmatter.txtcolor || "grey"
  const accolor = release.frontmatter.accolor || "tomato"
  const colors = {bgcolor: bgcolor, txtcolor: txtcolor, accolor: txtcolor}

  return (
    <Layout colors={colors}>
      <div className="release" name="start">
        <div className="cover">
          <div className={`releaseleft ${prev ? '' : 'hidden'}`}>
            <a href={prev && `${prev.fields.slug}#start`}>
              <svg fill={`${txtcolor}`} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <title>circle-left</title>
              <path d="M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13z"></path>
              <path d="M20.914 9.914l-2.829-2.829-8.914 8.914 8.914 8.914 2.828-2.828-6.086-6.086z"></path>
              </svg>
            </a>
          </div>
          <img src={`${release.frontmatter.artwork.publicURL}`} alt=""/>
          <div className={`releaseright ${next ? '' : 'hidden'}`}>
            <a href={next && `${next.fields.slug}#start`}>
              <svg fill={`${txtcolor}`} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <title>circle-right</title>
              <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></path>
              <path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="info">
          <h2 style={{color: `${accolor}`}}>{release.frontmatter.title}</h2>
          <HTMLContent content={release.html} styleString={{color: `${txtcolor}`}}/>
          <a className="button" href={`${release.frontmatter.listenLink}`} target="_blank" rel="noopener noreferrer" style={{color: `${txtcolor}`, borderColor: `${txtcolor}`}}>LISTEN</a>
        </div>
      </div>
    </Layout>
  )
}

ReleasePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ReleasePage

export const pageQuery = graphql`
  query ReleaseByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        artwork {
          publicURL
        }
        listenLink
        bgcolor
        txtcolor
        accolor
      }
    }
  }
`
