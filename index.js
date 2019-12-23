const Core = require("./core.js");

module.exports = async function(config) {
  if (!config) {
    throw new Error("Config is mandatory");
  }

  let coreMapper = new Core(config);

  await coreMapper.sitemapMapper(config.pagesDirectory);
  coreMapper.finish();
};
