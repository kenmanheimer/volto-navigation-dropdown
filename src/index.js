export default function applyConfig(config) {
  console.warn("*** volto-navigation-dropdown/src/index.js ing ***");
  config.settings = {
    ...config.settings,
    navDepth: 100,
  };
  return config
}
