import babel from 'rollup-plugin-babel';
// import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
// import progress from 'rollup-plugin-progress';
// import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import{ uglify } from 'rollup-plugin-uglify';
// import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: false,
    },
  ],
  external: ['react', 'react-dom', 'prop-types', 'hoist-non-react-statics'],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'prop-types': 'PropTypes',
    'hoist-non-react-statics': 'hoistNonReactStatics'
  },
  plugins: [
    // progress(),
    resolve({
      browser: true,
    }),
    babel({
        babelrc: true,
        // Check if we need anything from babel-preset-stage-x
      //   presets: [/* ['es2015', { modules: false }],  *//* 'stage-1',  */'@babel/preset-react'],
      //   plugins: [],
      }),
    commonjs({
      include: [
        'node_modules/react',
        // 'node_modules/prop-types'
      ],
      exclude: [
        // 'node_modules/process-es6/**',
      ],
      namedExports: {
        // 'node_modules/react/index.js': ['createElement'],
        // 'node_modules/react-dom/index.js': ['render'],
      },
    }),
    uglify({
        compress: {
            drop_console: true,
        }
    }),
    // visualizer(),
    // filesize(),
    /* replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }), */
  ],
};