module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint-config-i-am-meticulous/react"
  ],
  "rules": {
    "import/no-namespace": 0,
    "react/jsx-no-literals": 0,
    // TODO: This rule should be enabled! Fix the components in src/ to use SFCs
    "react/prefer-stateless-function": 0
  }
}
