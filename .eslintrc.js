module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:promise/recommended",
    "plugin:jest-formatting/recommended",
    "plugin:jest/all"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jest", "jest-formatting", "promise"],
  rules: {
    "react/react-in-jsx-scope": "off"
  },
  globals: {
    React: "writable"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
