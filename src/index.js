import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux';
import {Provider} from'react-redux';
import counter from "./reducer";
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(counter);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
