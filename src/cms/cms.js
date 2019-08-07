import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ContactPagePreview from './preview-templates/ContactPagePreview'
import ReleasePagePreview from './preview-templates/ReleasePagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('releases', ReleasePagePreview)
