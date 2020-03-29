module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "airbnb/hooks"],
  rules: {
    "linebreak-style": "off",
    "quotes": ["error", "double"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
