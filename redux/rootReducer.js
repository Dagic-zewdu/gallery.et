import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GalleryReducer from './reducer/gallery';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
};

const rootReducer = combineReducers({ 
    gallery: GalleryReducer,
    //booksReducer: persistReducer(persistConfig, booksReducer)

 });

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);