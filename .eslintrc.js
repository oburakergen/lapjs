module.exports = {
    extends: 'eslint:recommended',
    rules: {
        'semi': ['error', 'always'],
        'no-else-return': 'error',
        'no-nested-ternary': 'error',
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 0
        }],
        'no-multi-assign': 'error',
        'max-len': ['error', {
            code: 130,
            ignoreComments: true
        }],
        'no-whitespace-before-property': 'error',
        'semi-spacing': 'error',
        'eqeqeq': ['error', 'always'],
        'no-alert': 'error',
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
            exceptions: {
                BinaryExpression: true,
                VariableDeclarator: true,
                Property: true
            }
        }],
        'new-cap': 'error',
        'space-before-blocks': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var']
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['if']
            },
            {
                blankLine: 'always',
                prev: ['*'],
                next: ['function']
            }
        ],
        'one-var': ['error', 'never'],
        'no-useless-escape': 0,
        'no-use-before-define': ['error', {
            variables: false
        }],
        'no-array-constructor': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', {
            avoidEscape: true
        }],
        'key-spacing': ['error', {
            mode: 'strict'
        }],
        'no-new-object': 'error',
        'indent': ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 4
        }],
        'prefer-const': 'error',
        'no-eval': 'error',
        'camelcase': ['error', {
            properties: 'never'
        }],
        'newline-after-var': ['error', 'always'],
        'no-global-assign': 'error',
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'no-shadow': ['error', {
            hoist: 'functions'
        }],
        'max-params': ['error', 3]
    },
    globals: {
        Laraplay: true,
        document: true,
        window: true,
        location: true,
        setTimeout: true,
        setInterval: true,
        clearTimeout: true,
        clearInterval: true,
        ga: true,
        module: true,
        partner_site: true,
        partnerName: true,
        localStorage: true,
        sessionStorage: true,
        dataLayer: true,
        XMLHttpRequest: true,
        performance: true,
        laraplay_object: true
    },
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: true
        }
    }
};
