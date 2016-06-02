module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['browserify', 'source-map-support', 'jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/zone.js/dist/zone-microtask.js',
            'spec/js/init.es6',
            'app/**/*.spec.es6'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'spec/js/init.es6': ['browserify'],
            'app/**/*.spec.es6': ['browserify'],
        },

        browserify: {
            debug: true,
            transform: [
                'babelify',
                ['stringify', {extensions: ['.html','.css']}]
             ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // delay to wait before starting a new test in ms
        autoWatchBatchDelay: 250,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['PhantomJS'],
        browsers: ['Firefox'],
        // browsers: ['Firefox', 'FirefoxDeveloper', 'FirefoxAurora', 'FirefoxNightly'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
}