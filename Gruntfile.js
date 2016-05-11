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
            files: ['app/**/*.js'],
            tasks: ['browserify']
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify', 'watch']);

};
