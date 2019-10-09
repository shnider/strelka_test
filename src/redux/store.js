import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const configureStore = persistedState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore;
