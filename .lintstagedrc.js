module.exports = {
  "**/*.js": [
    "npm run lint:js",
    "npm run lint:format:check",
    "npm run test:related",
  ],
  "*.{css,scss,html,md,json,yml,yaml}": ["npm run lint:format:check"],
};
