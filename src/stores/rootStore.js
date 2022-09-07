import {configureStore, applyMiddleware} from '@reduxjs/toolkit'
import React from 'react'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'

const store = configureStore({reducer: rootReducer}, applyMiddleware(thunk))


export default store