module.exports = {
    ident: 'postcss',
    plugins: [
        require('postcss-import'),
        require('postcss-each'),
        require('postcss-flexbugs-fixes'),
        require('autoprefixer')({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        }),
        require('postcss-cssnext')({
          warnForDuplicates: false
        }),
    ]
}
