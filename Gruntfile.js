module.exports = function(grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: {
          'dest/index.html': 'layout.jade',
        }
      }
    },

    watch: {
      configFiles: {
        files: [ 'Gruntfile.js' ],
        tasks: ['default'],
      },
      jade: {
        files: '*.jade',
        tasks: ['jade'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'watch']);

};