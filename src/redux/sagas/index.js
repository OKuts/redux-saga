import {takeEvery, put, call, fork} from 'redux-saga/effects';

const getData = async (pattern) => {
  const request = await fetch(`https://swapi.dev/api/${pattern}`);
  const data = await request.json();
  return data;
}

// const wait = t => new Promise((res => {
//   setTimeout(res, t)
// }))

export function * loadPeople() {
  const people = yield call(getData, 'people');
  yield put({type: 'GET_USERS', payload: people.results})
}

export function * loadPlanets() {
  const planets = yield call(getData, 'planets');
  yield put({type: 'GET_PLANETS', payload: planets.results})
}

export function * workerSaga() {
  yield fork(loadPeople);
  yield fork(loadPlanets);
}

export function * watchClickSaga() {
    yield takeEvery('LOAD_DATA', workerSaga);
}

export function * rootSaga() {
  yield fork(watchClickSaga);
}
