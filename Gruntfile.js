module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['sass/*.scss', 'index.html'],
      tasks: 'sass:dev'
    },

    sass: {
      dev: {
        files: {
          'style.css':'sass/_comments.scss',
          'style.css':'sass/_content.scss',
          'style.css':'sass/_infinitescroll.scss',
          'style.css':'sass/_layout.scss',
          'style.css':'sass/_media.scss',
          'style.css':'sass/_menu.scss',
          'style.css':'sass/_mixins.scss',
          'style.css':'sass/_navigation.scss',
          'style.css':'sass/_postformats.scss',
          'style.css':'sass/_reset.scss',
          'style.css':'sass/_settings.scss',
          'style.css':'sass/_typography.scss',
          'style.css':'sass/_widgets.scss',
          'style.css':'sass/style.scss'
        }
      }
    }
  });
  grunt.registerTask('default', 'sass:dev');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
}