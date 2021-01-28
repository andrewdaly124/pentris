module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "operator-linebreak": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "import/prefer-default-export": 0,
    "arrow-body-style": 0,
    "no-await-in-loop": 0,
    quotes: 0,
    "no-console": 0,
    "comma-dangle": 0,
    "implicit-arrow-linebreak": 0,
    "no-loop-func": 0,
    "func-names": 0,
    "no-plusplus": 0,
  },
};
