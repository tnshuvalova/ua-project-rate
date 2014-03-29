module.exports = function (grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000

                }
            }
        },

        'http-server': {
            'dev': {
                root: './',
                port: 8000,
                host: 'localhost',
                autoIndex: true,

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-http-server');
};
