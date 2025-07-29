import * as storage from 'redux-storage';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import filter from 'redux-storage-decorator-filter';
import {composeWithDevTools} from 'redux-devtools-extension';
import {legacy_createStore as createStore, applyMiddleware} from 'redux'; // Changed import
import createEngine from '../components/redux-storage-engine-localstorage/index';
//import reducers from '../reducers';
import sagas from '../sagas';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export default function configureStore(reducers, onComplete) {
  const engine = filter(
    createEngine('AppTree'),
    [
      'whitelisted-key',
      ['user'],

      /* ["events", "monthWiseData"] */
    ],
    [],
  );

  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();

  const enhance = composeWithDevTools({
    realtime: true,
    hostname: '10.0.4.22',
    port: 8000,
  });

  const store = createStore(
    storage.reducer(reducers),
    enhance(applyMiddleware(sagaMiddleware, storeMiddleware, logger)),
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(e =>
      console.log('Failed to load previous state @ configureStore.js#44' + e),
    );

  sagaMiddleware.run(sagas);

  return store;
}
