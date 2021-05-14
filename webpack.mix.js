let mix = require('laravel-mix');

let staticPath = 'static/build'
let resourcesPath = 'resources'

mix.setResourceRoot('/static/build') // setResroucesRoots add prefix to url() in scss on example: from /images/close.svg to /static/images/close.svgmix.setPublicPath('polls/static') // Path where mix-manifest.json is created// if you don't need browser-sync feature you can remove this lines

  mix.browserSync({
    proxy:"http://localhost:8000/",
    files: ['static/**/*.css', 'static/**/*.js'],
  }
  )

mix.js(`${resourcesPath}/js/app.js`, `${staticPath}/`).vue()
.sass(`${resourcesPath}/scss/style.scss`, `${staticPath}/`)
