import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className, styleString }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} style={styleString} />
)

const Content = ({ content, className, styleString }) => (
  <div className={className} style={styleString}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
  styleString: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
