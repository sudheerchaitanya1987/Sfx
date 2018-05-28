exports.config = {
    seleniumAddress : 'http://localhost:4444/wd/hub',
    suites: {
        login: [
            'test.js'
        ]
    },
    framework: 'jasmine2',
    allScriptsTimeout: 110000,
    getPageTimeout: 110000,
    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: false,
        defaultTimeoutInterval: 600000
    },
    directConnect: true,
    multiCapabilities: [
        {
            'browserName': 'chrome',
            shardTestFiles: false,
            maxInstances: 1
        }
    ]
};