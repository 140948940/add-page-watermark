'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/watermark-page.prod.cjs')
} else {
  module.exports = require('./dist/watermark-page.cjs')
}
