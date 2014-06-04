module.exports = function(grunt) {

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('bootcamp');

  // Grunt Tasks
  grunt.initConfig({
    dir : {
      src : 'stylesheets',
      dist : 'dist'
    },
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n',
      },
      dist: {
        src: [
          // Decoder
          '<%= dir.src %>/SassyBitwise/helpers/_power.scss',
          '<%= dir.src %>/SassyBitwise/helpers/_sign.scss',
          '<%= dir.src %>/SassyBitwise/helpers/_binary-to-decimal.scss',
          '<%= dir.src %>/SassyBitwise/helpers/_decimal-to-binary.scss',
          '<%= dir.src %>/SassyBitwise/helpers/_largest-power-of-2.scss',
          '<%= dir.src %>/SassyBitwise/helpers/_binary-length.scss',
          '<%= dir.src %>/SassyBitwise/validators/_is-number.scss',
          '<%= dir.src %>/SassyBitwise/validators/_arguments-validator.scss',
          '<%= dir.src %>/SassyBitwise/operators/_or.scss',
          '<%= dir.src %>/SassyBitwise/operators/_xor.scss',
          '<%= dir.src %>/SassyBitwise/operators/_and.scss',
          '<%= dir.src %>/SassyBitwise/operators/_not.scss',
          '<%= dir.src %>/SassyBitwise/operators/_shift-left.scss',
          '<%= dir.src %>/SassyBitwise/operators/_shift-right.scss',
          '<%= dir.src %>/SassyBitwise/api/_bitwise.scss',
        ],
        dest: '<%= dir.dist %>/_<%= pkg.name %>.scss',
      },
    },

    // Sass
    sass: {
      test: {
        options: {
          style: 'expanded',
          quiet: 'true',
          loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
        },
        files: {
          './tmp/results.css': './test/test.scss'
        }
      }
    },

    // Bootcamp
    bootcamp: {
      test: {
        files: {
          src: ['./tmp/results.css']
        }
      }
    },

    // Watch
    watch: {
      dist: {
        files: [
                './test/**/*.scss',
                './<%= dir.src %>/**/*.scss'
                ],
        tasks: ['test']
      }
    }
  });

  // Tasks
  grunt.registerTask('test', ['sass', 'bootcamp']);
  grunt.registerTask('dev', ['test', 'watch']);
  grunt.registerTask('build', ['test', 'concat']);
};
