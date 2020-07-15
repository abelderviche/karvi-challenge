import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";

import './scss/index.scss'
import Main from './container/main'
import store from "./store/store";


ReactDOM.render(  
    <Provider store={store}>
      <Main />
  </Provider>, document.getElementById('root'))