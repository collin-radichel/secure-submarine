import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchSecrets() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/secrets', config);

    yield put({ type: 'SET_SECRETS', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* secretsSaga() {
  yield takeLatest('FETCH_SECRETS', fetchSecrets);
}

export default secretsSaga;
