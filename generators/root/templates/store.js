const redux = require('redux');
const reducers = require('../reducers');

function reduxStore(initialState) {
  const store = redux.createStore(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

module.exports = reduxStore;
