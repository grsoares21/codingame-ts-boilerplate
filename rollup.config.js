
import typescript from '@rollup/plugin-typescript'
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    typescript(),
    nodeResolve({
      mainFields: ['main', 'jsnext']
    }),
    commonjs(),
    terser()
   ],
  watch: {
    include: 'src/**',
    exclude: 'src/**/*.test.ts',
  },
}