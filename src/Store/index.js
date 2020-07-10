import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers';

let middlewares = [thunk];

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



let store = createStore(reducers, {}, storeEnhancer(applyMiddleware(...middlewares)));
export { store};

