const {src, dest} = require('gulp')

const static = function(cb)
{
    return (src('src/static/data/*')
    .pipe(dest('dist/data'))) && src('src/_redirects')
    .pipe(dest('dist'))

    cb()
}

exports.default = static