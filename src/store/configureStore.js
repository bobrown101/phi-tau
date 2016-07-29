// import { browserHistory } from 'react-router';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware} from 'react-router-redux';


import rootReducer from '../reducers';

export default function configureStore(history) {
  const middleware = routerMiddleware(history);

  if (process.env.NODE_ENV === 'production') {

      return createStore(
        rootReducer,
        compose(applyMiddleware(thunkMiddleware), applyMiddleware(middleware))
      );

  } else {


    const store = createStore(
      rootReducer,
      compose(applyMiddleware(thunkMiddleware), applyMiddleware(middleware), window.devToolsExtension ? window.devToolsExtension() : f => f)
    );

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers').default; // eslint-disable-line global-require
        store.replaceReducer(nextReducer);
      });
    }

    return store;
  }

}
