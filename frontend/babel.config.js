module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react',  ["react-app", {
    "flow": false,
    "typescript": true
  }]],
  plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
};