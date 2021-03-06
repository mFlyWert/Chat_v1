import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, compose, createStore} from 'redux'
import {rootReducer} from './redux/rootReducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

const store = createStore(rootReducer, compose(
   applyMiddleware(thunk),
))

ReactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>
    ,
  document.getElementById('root')
)