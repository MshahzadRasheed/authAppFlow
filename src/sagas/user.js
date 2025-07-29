import {take, put, call, fork} from 'redux-saga/effects';
import {USER_SIGNUP, USER_SIGN_IN} from '../actions/ActionTypes';
import {SAGA_ALERT_TIMEOUT} from '../constants';
import {userSignUPSuccess} from '../actions/UserActions';
import {
  USER_SIGN_IN as USER_SIGN_IN_URL,
  USER_SIGNUP as USER_SIGNUP_URL,
  callRequest,
} from '../config/WebService';
import ApiSauce from '../services/ApiSauce';
import Util from '../util';
import DataHandler from '../services/DataHandler';

function alert(message, type = 'error') {
  setTimeout(() => {
    Util.topAlert(message, type);
  }, SAGA_ALERT_TIMEOUT);
}

function* signIn() {
  console.log('YAHHAAHA');
  while (true) {
    const {payload, responseCallback} = yield take(USER_SIGN_IN.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_SIGN_IN_URL,
        payload,
        '',
        {},
        ApiSauce,
      );
      console.log('response', response);
      if (response) {
        if (responseCallback) responseCallback(response, null);
        yield put(userSigninSuccess(response));
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

function* signUp() {
  console.log('YAHHAAHA');
  while (true) {
    const {payload, responseCallback} = yield take(USER_SIGNUP.REQUEST);
    try {
      const response = yield call(
        callRequest,
        USER_SIGNUP_URL,
        payload,
        '',
        {},
        ApiSauce,
      );
      console.log('response', response);
      if (response) {
        if (responseCallback) responseCallback(response, null);
        //  yield put(userSigninSuccess(response.data.user));
      } else {
        alert('Something went wrong');
      }
    } catch (err) {
      if (responseCallback) responseCallback(null, err);
      alert(Util.getErrorText(err.message));
    }
  }
}

export default function* root() {
  yield fork(signIn);
  yield fork(signUp);
}
