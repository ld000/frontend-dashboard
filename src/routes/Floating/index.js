export default () => ({
  path: 'floating',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Floating = require('./Floating').default
      cb(null, Floating)
    }, 'floating')
  }
})
