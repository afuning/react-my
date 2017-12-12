var path = require('path')

module.exports = {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@cpts': path.resolve(__dirname, '../src/components'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    }
};