/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: 'lf',
  semi: false,
  useTabs: false,
  singleQuote: false,
  arrowParens: 'avoid',
  tabWidth: 2,
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss'] // ✅ used by shadcn/tailwind setup
}

