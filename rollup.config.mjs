import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';

export default {
   input: 'src/index.js',
   output: {
      file: 'public/bundle.js',
      format: 'iife'
   },
   plugins: [
      nodeResolve({
         extensions: ['.js', 'jsx']
      }),
      babel({
         babelHelpers: 'bundled',
         presets: ['@babel/preset-react'],
         extensions: ['.js']
      }),
      commonjs(),
      replace({
         preventAssignment: false,
         'process.env.NODE_ENV': '"development"'
      }),
      json()
   ]
}