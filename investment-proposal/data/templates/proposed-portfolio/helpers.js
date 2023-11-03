const jsreport = require('jsreport-proxy')
await jsreport.assets.registerHelpers('mainHelper.js')

function getStatusClass(status) {
    let className = 'statustag';
    switch (status) {
        case 'sold':
            return `${className} error`
        case 'updated':
            return `${className} warning`
        case 'new':
            return `${className} success`
    }
}
