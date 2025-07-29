import {ILoginPayload, ILoginResponse} from '../types';
import {USER_SIGN_IN, USER_SIGNUP} from './ActionTypes';

interface Action {
  type: string;
  payload?: any;
  response?: any;
  responseCallback?: any;
}

export function userSignInRequest(
  payload: ILoginPayload,
  responseCallback: any,
): Action {
  return {
    payload,
    responseCallback,
    type: USER_SIGN_IN.REQUEST,
  };
}

export function userSignInSuccess(
  payload: ILoginPayload,
  responseCallback: any,
): Action {
  return {
    payload,
    responseCallback,
    type: USER_SIGN_IN.SUCCESS,
  };
}

export function userSignUPRequest(
  payload: ILoginPayload,
  responseCallback: any,
): Action {
  return {
    payload,
    responseCallback,
    type: USER_SIGNUP.REQUEST,
  };
}

export function userSignUPSuccess(
  payload: ILoginPayload,
  response: any,
): Action {
  return {
    payload,
    response,
    type: USER_SIGNUP.SUCCESS,
  };
}
