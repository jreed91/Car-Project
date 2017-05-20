import { combineReducers } from 'redux'

import * as carsRedux from './carsRedux'
import * as sceneRedux from './sceneRedux'

export const reducer = combineReducers({
  cars: carsRedux.reducer,
  sceneReducer: sceneRedux.reducer
})

export const carsActionCreators = carsRedux.actionCreators