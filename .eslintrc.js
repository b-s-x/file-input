module.exports = {
  env: { node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "@vue/typescript/recommended",
  ],
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // sourceType: 'module',
  },
  rules: {},
}
