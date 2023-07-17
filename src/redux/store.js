import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cartSlice'

const cartPersistConfig = {
    key: 'cart',
    storage
}

const cartPersistReducer = persistReducer(cartPersistConfig, cartReducer)

const store = configureStore({
    reducer: cartPersistReducer
})


export default store;

export const persistor = persistStore(store)