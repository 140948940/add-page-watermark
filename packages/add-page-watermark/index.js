'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/add-page-watermark.prod.cjs')
} else {
  module.exports = require('./dist/add-page-watermark.cjs')
}
