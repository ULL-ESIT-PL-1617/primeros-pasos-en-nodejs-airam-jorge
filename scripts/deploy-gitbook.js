
var ghpages = require('gh-pages');
var path    = require('path');
var json    = require('../package.json');

path.join(__dirname, 'primeros-pasos-en-nodejs-victor-jesus-pamela')

ghpages.publish(path.join(__dirname, '/../txt') /* Directorio de los src files */, {
    /* Default: branch: 'gh-pages', */
    repo:     json.repository.url,
    message: 'Auto-generated commit from deploy-gitbook.js',
    logger:   log
}, log);

function log(m) { if (m) { console.error(m); } }
