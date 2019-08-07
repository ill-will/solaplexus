import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ReleasePageTemplate = ({
  content,
  contentComponent,
  title,
  artwork,
  listenLink,
  bgcolor,
  txtcolor,
  accolor,
  prev,
  next,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
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
        <img src={`${artwork}`} alt={`${title} Artwork`}/>
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
        <h2 style={{color: `${accolor}`}}>{title}</h2>
        <PostContent content={content} styleString={{color: `${txtcolor}`}}/>
        <a className="button" href={`${listenLink}`} target="_blank" rel="noopener noreferrer" style={{color: `${txtcolor}`, borderColor: `${txtcolor}`}}>LISTEN</a>
      </div>
    </div>
  )
}

ReleasePageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  artwork: PropTypes.string,
  listenLink: PropTypes.string,
  bgcolor: PropTypes.string,
  txtcolor: PropTypes.string,
  accolor: PropTypes.string,
  prev: PropTypes.object,
  next: PropTypes.object,
  helmet: PropTypes.object,
}

const ReleasePage = ({ data, pageContext }) => {
  const { markdownRemark: release } = data
  console.log(pageContext)
  const prev = pageContext.prev
  const next = pageContext.next

  const bgcolor = release.frontmatter.bgcolor || "black"
  const txtcolor = release.frontmatter.txtcolor || "grey"
  const accolor = release.frontmatter.accolor || "tomato"
  const colors = {bgcolor: bgcolor, txtcolor: txtcolor, accolor: accolor}

  return (
    <Layout colors={colors}>
      <ReleasePageTemplate
        content={release.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${release.frontmatter.title}`}</title>
          </Helmet>
        }
        title={release.frontmatter.title}
        artwork={release.frontmatter.artwork.publicURL}
        listenLink={release.frontmatter.listenLink}
        bgcolor={release.frontmatter.bgcolor}
        txtcolor={release.frontmatter.txtcolor}
        accolor={release.frontmatter.accolor}
        prev={prev}
        next={next}
      />
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
