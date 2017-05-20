import React from 'react';
import { AppRegistry, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import configureStore from './app/store/configureStore'
import Router from './app/containers/router'

const store = configureStore()

// Pass the store into the Provider
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}