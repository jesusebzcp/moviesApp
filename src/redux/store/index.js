import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducer';

//Creando el store (State Principal)
/* const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'movies',
  hostname: 'localhost',
  port: 8000, // the port your remotedev server is running at
}); */
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
