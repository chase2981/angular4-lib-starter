import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'
//paths are relative to the execution path
export default {
  moduleName: 'angular4-lib-starter',
  entry: 'build/entry.js',
  dest: 'dist/index.js', // output a single application bundle
  sourceMap: true,
  sourceMapFile: 'dist/index.js.map',
  format: 'umd',
  external: ['@angular', 'rxjs'],
  onwarn: function(warning) {
    // Skip certain warnings
    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: ['node_modules/rxjs/**']
    }),
    uglify()
  ]
}
