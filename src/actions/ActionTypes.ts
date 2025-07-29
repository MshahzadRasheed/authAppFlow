import {APIConstants} from '../constants/APIConstants';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const CANCEL = 'CANCEL';
const FAILURE = 'FAILURE';

function createRequestTypes(base: string) {
  const res: {[key: string]: string} = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const USER_SIGN_IN = createRequestTypes('USER_SIGN_IN');
export const USER_SIGNUP = createRequestTypes('USER_SIGNUP');

export const NETWORK_INFO = 'NETWORK_INFO';

// start new service here

// Client Side Actions

export const EMPTY = createRequestTypes('EMPTY');
export const SELECT_USER_TYPE = 'SELECT_USER_TYPE';
export const SELECT_SERVICE_TYPE = 'SELECT_SERVICE_TYPE';
export const SELECT_DESTINATION = 'SELECT_DESTINATION';
