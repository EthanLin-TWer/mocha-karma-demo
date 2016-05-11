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
                src: ['test/**/*.spec.js']
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['browserify', 'watch:js']);
    grunt.registerTask('test', ['mochaTest', 'watch:test']);

};
