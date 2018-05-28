exports.config = {
    framework : 'jasmine',
    seleniumAddress : 'http://localhost:4444/wd/hub',
    capabilities : {
        browserName : 'chrome',
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 999999,
        includeStackTrace: true,
        isVerbose: true
    },

    allScriptsTimeout: 999999,
    getPageTimeout: 999999,
    specs : ['test.js']
}
