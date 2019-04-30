module.exports = function(api) {
  api.cache(true);

  const presets = [
    require('@babel/preset-env'),
    require('@babel/preset-flow'),
    require('@babel/preset-react')
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
};
