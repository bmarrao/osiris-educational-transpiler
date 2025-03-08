import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './indexcjs.js',
  output: {
    filename: 'osiris.cjs',
    path: path.resolve(__dirname, 'cjs'),
    clean: true,
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  experiments: {
    outputModule: false, // Disable module output
  },
  mode: 'development',
  optimization: {
    usedExports: false, // Prevents tree shaking
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
