'use strict';

module.exports = function(config) {

	config.set({
		basePath: '../',
        frameworks: ['browserify', 'jasmine'],
		browsers: ['PhantomJS'],

		files: [
			'app/**/*.js',
            'test/unit-karma/**/*.spec.js'
	    ],
        preprocessors: {
            'app/**/*.js': [ 'browserify' ],
            'test/**/*.js': [ 'browserify' ]
        },

        browserify: {
            transform: [ 'babelify' ]
        },
	    plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-phantomjs-launcher'
	    ],

		reporters: ['progress'],

        logLevel: 'LOG_INFO',
        singleRun: false,
        autoWatch: true
    });
};
