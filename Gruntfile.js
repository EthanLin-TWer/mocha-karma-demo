module.exports = function(grunt) {

    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    "transform": [
                        ["babelify", { "presets": ["es2015"] }]
                    ]
                },
                files: {
                    './dist/bundle.js': ['./app/**/*.js']
                }
            }
        },

        watch: {
            js: {
                files: ['app/**/*.js'],
                tasks: ['browserify']
            },
            "test": {
                files: ['app/**/*.js'],
                tasks: ['mochaTest']
            }
        },

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: ['babel-register']
                },
                src: ['test/unit-mocha/**/*.spec.js']
            }
        },

        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['browserify', 'watch:js']);
    grunt.registerTask('mocha', ['mochaTest', 'watch:test']);
    grunt.registerTask('karma', ['karma']);

};
