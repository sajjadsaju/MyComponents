module.exports = function  (grunt) {
	grunt.initConfig({
		connect: {
			server: {
			  options: {
				port: 9090,
				base: 'build',
				livereload: true,
				open: true,
				hostname: 'localhost',
			  }
			}
		},
		stylus : {
			compile : {
				
				options : {
					compress : false,
				},
				files :  {
					"build/css/styles.css" : "app/styles/themes/styles.styl",
				}

			}
		},
		autoprefixer: {
			dist: {
				files: {
					'build/css/styles.css': 'build/css/styles.css'
				}
			}
		},

		// uglify css and beatuify
		cssmin: {
		  target: {
			files: [{
			  expand: true,
			  cwd: 'build/css/',
			  src: ['*.css', '!*.min.css'],
			  dest: 'build/css/',
			  ext: '.min.css'
			}]
		  }
		},
		// pug
		pug : {
			compile : {
				files : {
					"build/index.html" : "app/controllers/index.pug",
					// "build/sicons.html" : "src/jade/files/sicons.jade",
					// "build/icons.html" : "src/jade/icons.jade",
					// // "build/buttons.html" : "src/jade/files/buttons.jade",
					// "build/image-boxes.html" : "src/jade/image-boxes.jade",
					// "build/tabs.html" : "src/jade/tabs.jade",
					// "build/buttons.html" : "src/jade/buttons.jade",


				},
				options : {
					pretty : true,
				}
			}
		},

		copy : {
			main : {
				files : [
					{
						expand : true,
						cwd : "node_modules/bootstrap/dist/",
						src : ["**/*"],
						dest : "build/frameworks/bootstrap/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/jquery/dist/",
						src : ["jquery.js", "jquery.min.js"],
						dest : "build/frameworks/jquery/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/owl.carousel/dist/",
						src : ["**/*"],
						dest : "build/frameworks/owl.carousel/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/jquery-smooth-scroll/",
						src : ["**/*"],
						dest : "build/frameworks/smooth-scroll/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/font-awesome/",
						src : ["**/*"],
						dest : "build/frameworks/font-awesome/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/flat-social-icons/",
						src : ["**/*"],
						dest : "build/frameworks/flat-social-icons/",
						filter : "isFile",
					},
					
					{
						expand : true,
						cwd : "node_modules/jquery-simple-timer/",
						src : ["**/*"],
						dest : "build/frameworks/timer/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/vegas/dist/",
						src : ["**/*"],
						dest : "build/frameworks/vegas/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/wowjs/dist/",
						src : ["**/*"],
						dest : "build/frameworks/wow/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/particles.js/",
						src : ["**/*"],
						dest : "build/frameworks/particles/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/magnific-popup/dist/",
						src : ["**/*"],
						dest : "build/frameworks/magnific-popup/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/fittext/dist/",
						src : ["**/*"],
						dest : "build/frameworks/fittext/",
						filter : "isFile",
					},
					{
						expand : true,
						cwd : "node_modules/animate.css/",
						src : ["**/*"],
						dest : "build/frameworks/animate.css/",
						filter : "isFile",
					},
				]
			}
		},

		watch : {
			options : {
				spawn : false, 
				livereload: true,
				// nospawn: true,
				// debounceDelay: 250,
			},
			livereload: {
				files: ['build/**/*.html', 'build/*.html', 'build/**/*.css', 'build/**/*.js'],
				// files: ['build/index.html'],
				tasks: [],
				options: {
					livereload: true,
				}
			},
			css : {
				files : ["app/**/*.styl", "framework/**/*.styl"],
				tasks : "stylus",
				options: {
					// nospawn: true,
					interrupt: true,
				}

			},

			pug: {
				files : ["app/**/*.pug", "framework/**/*.pug"],
				tasks  :"pug",
				options: {
					// nospawn: true,
					interrupt: true,
				}
			},

			configFiles: {
				files: ['Gruntfile.js'],
				options: {
				  reload: true
				}
		  }
		},
		prettify: {
		  options: {
			// config: '.prettifyrc'
		  },
		  // Prettify a directory of files 
		  all: {
			expand: true,
			cwd: 'build/',
			ext: '.html',
			src: ['*.html'],
			dest: 'build/'
		  },
		  
		}

	});

	grunt.registerTask('build', ['stylus', 'pug', 'autoprefixer', 'prettify', 'copy', 'cssmin']);
	
	grunt.registerTask('serve', [
		'connect:server',
		'watch'
	]);
	grunt.loadNpmTasks("grunt-contrib-stylus");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-pug');
}