import { put, takeLatest, all, call, select } from 'redux-saga/effects';
import {decrement, increment, incrementAmount, reset} from "./slices/counter";
import {getIncrement, getDecrement, getReset, getIncrementAmount, setMessage} from "./slices/event";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
   yield put({ type: setMessage.type, payload: true});
   yield put({ type: increment.type});
   yield call(delay, 1000);
   yield put({ type: setMessage.type, payload: false});
}
function* decrementAsync() {
   yield put({ type: setMessage.type, payload: true});
   yield put({ type: decrement.type});
   yield call(delay, 1000);
   yield put({ type: setMessage.type, payload: false});
}
function* resetAsync() {
   yield put({ type: setMessage.type, payload: true});
   yield put({ type: reset.type});
   yield call(delay, 1000);
   yield put({ type: setMessage.type, payload: false});
}
function* incrementAmountAsync() {
   const {counter} = yield select();
   yield put({ type: setMessage.type, payload: true});
   yield put({ type: incrementAmount.type, payload: counter.inputValue});
   yield call(delay, 1000);
   yield put({ type: setMessage.type, payload: false});
}

function* watchIncrement() {
   yield takeLatest( getIncrement.type, incrementAsync);
   yield takeLatest( getDecrement.type, decrementAsync);
   yield takeLatest( getReset.type, resetAsync);
   yield takeLatest( getIncrementAmount.type, incrementAmountAsync);
}

export default function* rootSaga() {
   yield all([
      watchIncrement(),
   ])
}