import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';

import reducers from '../reducers/';

const persistConfig = {
    key: 'root',
    storage,
 };

 const prReducer = persistReducer(persistConfig, reducers);

export const store = createStore(prReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);