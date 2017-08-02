export default () => ({
  path: 'rainbolt',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Rainbolt = require('./Rainbolt').default
      cb(null, Rainbolt)
    }, 'rainbolt')
  }
})
