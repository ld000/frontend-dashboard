export default () => ({
  path: 'svg-line',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SVGLine = require('./SVGLine').default
      cb(null, SVGLine)
    }, 'svg-line')
  }
})
