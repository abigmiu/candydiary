/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'plugin:import/recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "import/order": [
            "error",
            {
                "groups": [
                    "type",
                    "internal",
                    "external",
                    "builtin",
                    "index",
                    "sibling",
                    "parent",
                    "object",
                ],
                'newlines-between': "always",
            }
        ]
    }
}
