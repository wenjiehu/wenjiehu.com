module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },
            beforeconcat: ['js/script.js']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['copy', 'uglify', 'jshint']);
};
