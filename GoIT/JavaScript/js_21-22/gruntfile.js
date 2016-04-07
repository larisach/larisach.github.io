module.exports = function(grunt) {
 
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
concat: {
	options: {
        separator: ';'
    },
    dist: {
        src: ['src/js/tmpl.js', 'src/js/script.js'],
        dest: 'dist/js/script.js'
    }
},
uglify: {	
    dist: {
        src: ['dist/js/script.js'],
        dest: 'dist/js/script.min.js'
    }
},
concat_css: {	
    css: {
        src: 'src/css/*.css',
        dest: 'dist/css/style.css'
    }
},
cssmin: {
	options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
    css: {
        src: 'dist/css/style.css',
        dest: 'dist/css/style.min.css'
    }
} 
});

  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin'); 

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);
};