module.exports = function(grunt) {
    grunt.initConfig({
        paths: {
            app: 'app',
            dist: 'dist'
        },
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                src: ['<%= paths.dist %>/*', ]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: ['<%= paths.app %>/js/script.js']
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>',
                    src: ['js/*', 'css/*', 'fonts/*', 'images/**', 'bower_components/**'],
                    dest: '<%= paths.dist %>',
                }, {
                    expand: true,
                    cwd: '<%= paths.app %>',
                    src: ['index.html', 'favicon.ico', 'robots.txt'],
                    dest: '<%= paths.dist %>',
                }]
            }
        },
        less: {
            development: {
                files: {
                    "<%= paths.app %>/css/freelancer.css": "<%= paths.app %>/less/freelancer.less"
                }
            }
        },
        watch: {
            less: {
                files: ['<%= paths.app %>/less/*.less'],
                tasks: ['less'],
            },
        },
        useminPrepare: {
            html: '<%= paths.dist %>/index.html',
            options: {
                flow: {
                    steps: {
                        'js': ['concat', 'uglifyjs'],
                        'css': ['concat', 'cssmin']
                    },
                    post: []
                }
            }
        },
        usemin: {
            html: '<%= paths.dist %>/index.html',
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['clean', 'jshint', 'copy']);
    grunt.registerTask('min-script', ['useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin']);
};