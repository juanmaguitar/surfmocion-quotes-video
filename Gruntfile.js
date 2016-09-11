module.exports = function(grunt) {

	grunt.initConfig({
		baseFolder: '.',
		pkg: grunt.file.readJSON('package.json')
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.config('autoprefixer', {
    single_file: {
        src: 'src/style.css',
        dest: 'public/style.css'
    }
	})


	/* watch */
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.config('watch', {
		options: {
			livereload: '<%= connect.options.livereload %>',
		},
		all : {
			files: ['<%= baseFolder %>/**/*', 'Gruntfile.js'],
			tasks: ['autoprefixer']
		}
	});

	/* connect */
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.config('connect', {
		options: {
			port: 8080,
			livereload: 35729,
			hostname: 'localhost'
		},
		livereload: {
			options: {
				open: true,
				base: '<%= baseFolder %>/public'
			}
		}
	});

	grunt.registerTask('serve', ['connect:livereload','watch:all']);
	grunt.registerTask('default', ['autoprefixer', 'serve']);

};