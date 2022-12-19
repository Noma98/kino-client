import user from '@/store/user';
import AsyncStorage from '@react-native-community/async-storage';
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

const rootReducer = combineReducers({user});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};
const middlewares = [];
const persistedReducer = persistReducer(persistConfig, rootReducer);
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
