const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackCleanPlugin = require('webpack-clean');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');

/*********************************
 *       define file paths
 ********************************/
const destination = 'dist';
const htmlTemplate = './src/client/template.html';

/*********************************
 *    client entry point paths
 ********************************/
const clientEntrypoints = [
  {
    name: "INDEX - start page",
    entry: "./src/client/index.jsx",
    filename: "Index.html"
  }
];

/*********************************
 *       Sass settings
 ********************************/

const sassConfig = {
  entry: './src/client/styles.js',
  output: {
    filename: 'styles.js',
    path: path.resolve(__dirname, 'src/client/dist')
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};

/*********************************
 *       Declare settings
 ********************************/

// any shared client & server settings
const sharedConfigSettings = {
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};

// eslint settings, to check during build if desired
const eslintConfig = {
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    cache: false,
    failOnError: false,
    fix: true,
  },
};

// appscript copy settings, to copy this file over to the destination directory
const appsscriptConfig = {
  name: 'COPY APPSSCRIPT.JSON',
  entry: './appsscript.json',
  plugins: [
    new CleanWebpackPlugin([destination]),
    new CopyWebpackPlugin([
      {
        from: './appsscript.json',
      },
    ]),
  ],
};

// config shared for all client settings
const clientConfig = {
  ...sharedConfigSettings,
  output: {
    path: path.resolve(__dirname, destination),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      // turned off by default, but uncomment below to run linting during build
      // eslintConfig,
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

// config for EACH client entrypoint
const clientConfigs = clientEntrypoints.map(clientEntrypoint => {
  return {
    ...clientConfig,
    name: clientEntrypoint.name,
    entry: clientEntrypoint.entry,
    plugins: [
      new HtmlWebpackPlugin({
        template: htmlTemplate,
        filename: clientEntrypoint.filename,
        inlineSource: '^[^(//)]+.(js|css)$', // embed all js and css inline, exclude packages with '//' for dynamic cdn insertion
      }),
      new HtmlWebpackInlineSourcePlugin(),
      new WebpackCleanPlugin([path.join(destination, 'main.js')]),
      new DynamicCdnWebpackPlugin(),
    ],
  };
});

const serverConfig = {
  ...sharedConfigSettings,
  name: 'SERVER',
  entry: './src/server/code.js',
  output: {
    filename: 'code.js',
    path: path.resolve(__dirname, destination),
    libraryTarget: 'this',
  },
  module: {
    rules: [
      // turned off by default, but uncomment below to run linting during build
      // eslintConfig,
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {
            properties: false,
          },
          mangle: false,
          module: false,
          output: {
            beautify: true,
          },
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
  plugins: [new GasPlugin()],
};

module.exports = [
  sassConfig,
  // 1. Copy the appscript file.
  appsscriptConfig,
  // // 2. One client bundle for each client entrypoint.
  ...clientConfigs,
  // // 3. Bundle the server
  serverConfig,
];
