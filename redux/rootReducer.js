import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GalleryReducer from './reducer/gallery';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({ 
    gallery: GalleryReducer,
    
 });

export const store = createStore(rootReducer, applyMiddleware(thunk));