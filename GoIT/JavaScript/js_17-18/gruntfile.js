module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: 'js/*.js',
        dest: 'dest/js/concat.js'
      }
    },

    concat_css: {
      css: {
        src: 'css/*.css',
        dest: 'dest/css/concat.css'
      }
    },

    uglify: {
      js: {
        src: 'dest/js/concat.js',
        dest: 'dest/js/concat.min.js'
      }
    },

    cssmin: {
      css: {
        src: 'dest/css/concat.css',
        dest: 'dest/css/concat.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'concat_css', 'uglify', 'cssmin']);
};