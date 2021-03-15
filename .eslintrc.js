module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "babel-eslint",
  extends: ["eslint-config-airbnb-base", "eslint-config-prettier"],
  rules: {
    "import/prefer-default-export": "off",
    "array-callback-return": "off",
    "no-unused-vars": "off",
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "import/no-extraneous-dependencies": "off"
  },
  settings: {
    "import/resolver": {
      webpack: { config: "webpack.config.js" }
    }
  }
};
