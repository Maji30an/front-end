import {configureStore, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import counterReducer from './slices/counter';
import eventReducer from './slices/event';
import rootSaga from "./saga";

const rootReducer = combineReducers({
   counter: counterReducer,
   event: eventReducer
})

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

