module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		shell: {
			multiple: {
				command: [
					'rm -rf dist',
					'ember build --environment=development',
					'cd dist',
					'cp index.html 200.html'
				].join('&&')
			}
		},
		notify: {
      		surge: {
        		options: {
          			title: 'mariagranda.com',
          			message: 'Deployment complete.',
        		}
      		},
    	},
		surge: {
			'mariagranda.com': {
        		options: {
          			project: 'dist/',
          			domain: 'mariagranda.com'
        		}
			}
		}
	});

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-surge');
	grunt.loadNpmTasks('grunt-notify');

	// Default task(s).
	grunt.registerTask('default', ['shell', 'surge', 'notify:surge']);

};