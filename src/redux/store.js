import { applyMiddleware, combineReducers, createStore } from 'redux'
import { logger } from 'redux-logger'
import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import directoryReducer from './directory/directory.reducer'
import sectionsReducer from './shop/shop.reducer'

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
  sections: sectionsReducer
})

const middleWares = [] // [logger]

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(...middleWares))
export const persistor = persistStore(store)
