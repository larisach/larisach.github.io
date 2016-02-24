module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			css: {
				src: ['css/init/*.css'],
                dest: 'css/styles.css'
				},
			js: {
                src: ['js/init/*.js'],
                dest: 'js/scripts.js'
                }
			},
			cssmin: {
    cssmin: {
      src: 'css/styles.css',
      dest: 'css/styles.min.css'
    }
  },
   uglify: {
    js: {
      src: ['js/scripts.js'],
      dest: 'js/scripts.min.js'
    }
  },
			 watch: {
    css: {
      files: ['css/init/*.css'],
      tasks: ['concat:css', 'cssmin:css']
    },
    js: {
      files: ['js/init/*.js'],
      tasks: ['concat:js', 'uglify:js']
    }
  }
});
     

        // Load the plugins that provides the "concat","uglify" tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};
