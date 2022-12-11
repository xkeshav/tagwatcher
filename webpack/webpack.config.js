const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    background: path.resolve(__dirname, '..', 'src', 'background.ts'),
    'scripts/popup': path.resolve(__dirname, '..', 'src', 'scripts', 'popup.ts'),
    'scripts/options': path.resolve(__dirname, '..', 'src', 'scripts', 'options.ts'),
    'scripts/panel': path.resolve(__dirname, '..', 'src', 'scripts', 'panel.ts'),
    'scripts/devtools': path.resolve(__dirname, '..', 'src', 'scripts', 'devtools.ts'),
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js',
    clean: true,
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: '.', to: '.', context: 'public' },
        {
          from: path.resolve(__dirname, '..', 'src', 'styles'),
          to: path.resolve(__dirname, '..', 'dist', 'styles'),
          context: 'public',
        },
        {
          from: path.resolve(__dirname, '..', 'src', 'html'),
          to: path.resolve(__dirname, '..', 'dist', 'html'),
          context: 'public',
        },
        {
          from: path.resolve(__dirname, '..', '_locales'),
          to: path.resolve(__dirname, '..', 'dist', '_locales'),
          context: 'public',
        },
        {
          from: path.resolve(__dirname, '..', 'src', 'images'),
          to: path.resolve(__dirname, '..', 'dist', 'images'),
          context: 'public',
        },
      ],
    }),
  ],
};
