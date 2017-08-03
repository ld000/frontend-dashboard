export default () => ({
  path: 'flower',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Flower = require('./Flower').default
      cb(null, Flower)
    }, 'flower')
  }
})
