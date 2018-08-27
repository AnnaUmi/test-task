const images = require('remark-images');
const remarkGridTables = require('remark-grid-tables');

const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [images, remarkGridTables],
  },
});

module.exports = withMDX({
  webpack(cfg) {
    const plugins = cfg.plugins.map(plugin => {
      if (plugin.constructor.name !== 'UglifyJsPlugin') {
        return plugin;
      }
      // disable mangle in uglify as it causes wrong names in code snippets
      const { uglifyOptions } = plugin.options;

      const noMangleUglifyOptions = Object.assign(uglifyOptions, {
        mangle: { keep_fnames: true, keep_classnames: true },
        compress: { keep_fnames: true, keep_classnames: true },
        keep_classnames: true,
        keep_fnames: true,
      });

      const noMangleUglifyPlugin = Object.assign(plugin, {
        options: Object.assign(plugin.options, { uglifyOptions: noMangleUglifyOptions }),
      });
      return noMangleUglifyPlugin;
    });

    return Object.assign({}, cfg, { plugins });
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});
