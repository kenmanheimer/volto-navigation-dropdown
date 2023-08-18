export default function applyConfig(config) {
  // console.warn("*** volto-navigation-dropdown/src/index.js ing ***");
  config.settings = {
    ...config.settings,
    navDepth: 100,
    // In your config set selfInContents false to inhibit dropdown
    // submenus from including an entry for the container:
    dropdownmenu: {
      selfInContents: true,
    },
  };
  return config
}
