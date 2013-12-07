module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dest'],
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: ['js/*', 'css/*', 'fonts/*', 'images/*'],
                    dest: 'dest/',
                }, {
                    expand: true,
                    src: ['index.html', 'favicon.ico', 'robots.txt'],
                    dest: 'dest/',
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dest/js/script.js',
                dest: 'dest/js/script.min.js'
            }
        },
        jshint: {
            options: {
                jshintrc: 'js/.jshintrc'
            },
            src: ['js/script.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['clean', 'copy', 'uglify', 'jshint']);
};
