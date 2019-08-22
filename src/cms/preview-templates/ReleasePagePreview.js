import React from 'react'
import PropTypes from 'prop-types'
import { ReleasePageTemplate } from '../../templates/release-page'

const ReleasePagePreview = ({ entry, widgetFor }) => (
  <ReleasePageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
    artwork={entry.getIn(['data', 'artwork'])}
    listenLink={entry.getIn(['data', 'listenLink'])}
    bgcolor={entry.getIn(['data', 'bgcolor'])}
    txtcolor={entry.getIn(['data', 'txtcolor'])}
    accolor={entry.getIn(['data', 'accolor'])}
    logoPath={entry.getIn(['data', 'logoPath'])}
  />
)

ReleasePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ReleasePagePreview
