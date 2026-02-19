module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {  
            development: { // Compila o style para o desenvolvimento
                files: {
                    'dev/styles/main.css': 'src/styles/main.less' // 'aqv-dist': 'arqv-font'
                }
            },

            production: { // Compila o style para a produção
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },

        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },

            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },

        clean: {
            prebuild: ['prebuild']
            },

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        },

        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less'); // carregar o plugin de compilação do LESS
    grunt.loadNpmTasks('grunt-contrib-watch'); // carregar o plugin de observação 
    grunt.loadNpmTasks('grunt-replace'); // carregar o plugin de substituição de textos
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); // carregar o plugin de compressão do html
    grunt.loadNpmTasks('grunt-contrib-clean'); // carregar o plugin para excluir algum arquivo
    grunt.loadNpmTasks('grunt-contrib-uglify'); // carregar o plugin de compressão do JacaScript

    grunt.registerTask('default', ['less:development', 'replace:dev', 'watch']);
    grunt.registerTask('build', ['htmlmin:dist', 'replace:dist', 'clean:prebuild', 'less:production', 'uglify']);
}