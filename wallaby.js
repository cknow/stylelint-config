module.exports = function(wallaby) {
    return {
        files: [
            'rules/**/*.js',
            'index.js'
        ],

        tests: [
            'test/**/*.js'
        ],

        env: {
            type: 'node'
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['env'],
                plugins: ['transform-runtime']
            })
        },

        testFramework: 'ava'
    };
};
