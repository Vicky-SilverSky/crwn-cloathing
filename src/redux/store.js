import { applyMiddleware, combineReducers, createStore } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import shopReducer from './shop/shop.reducer'
import directoryReducer from './directory/directory.reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
})

const middleWares = [thunk]; // [logger]

if (process.env.NODE_ENV === "development") {
  // middleWares.push(logger)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(...middleWares))
export const persistor = persistStore(store)
