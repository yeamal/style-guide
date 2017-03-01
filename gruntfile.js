module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/app/.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'sass/style.css' : 'sass/style.scss'
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint'],
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
  grunt.registerTask('default', ['jshint']);

};