module.exports = function(grunt) {

    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    "transform": [ ["babelify", { "presets": ["es2015"] }] ]
                },
                files: {
                    './dist/bundle.js': ['./app/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask('default', ['browserify']);

};
