import _ from 'lodash';
import Util from '../util';
import {APIConstants} from '../constants/APIConstants';

export const BASE_URL = 'https://delta.authapp.live/backend';

export const API_TIMEOUT = 30000;
export const NEW_API_KEY = '1d399038bef14b0497d028fc27999696';

// API USER ROUTES
export const API_LOG = true;

export const ERROR_SOMETHING_WENT_WRONG = {
  message: 'Something went wrong, Please try again later',
  error: 'Something went wrong, Please try again later',
};
export const ERROR_NETWORK_NOT_AVAILABLE = {
  message: 'Please connect to the working Internet',
  error: 'Please connect to the working Internet',
};

export const ERROR_CANCEL_ERROR = {
  message: 'cancel Error',
  error: 'Something went wrong, Please try again later',
};

export const ERROR_TOKEN_EXPIRE = {
  message: 'Session Expired, Please login again!',
  error: 'Session Expired, Please login again!',
};

export const REQUEST_TYPE = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
  PUT: 'put',
};

// API USER ROUTES
export const EMPTY = {
  route: '',
  access_token_required: true,
  type: REQUEST_TYPE.POST,
};

export const USER_SIGNUP = {
  route: APIConstants.USER_SIGNUP,
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

export const USER_SIGN_IN = {
  route: APIConstants.USER_SIGN_IN,
  access_token_required: false,
  type: REQUEST_TYPE.POST,
};

export const callRequest = function (
  url: any,
  data: any,
  parameter: any,
  header = {},
  ApiSauce: any,
  baseUrl = BASE_URL,
) {
  // note, import of "ApiSause" has some errors, thats why I am passing it through parameters

  let _header = header;
  if (url.access_token_required) {
    const _access_token = Util.getCurrentUserAccessToken();
    if (_access_token) {
      _header = {
        ..._header,
        ...{
          Authorization: `Bearer ${_access_token}`,
        },
      };
    }
  }

  const _url =
    parameter && !_.isEmpty(parameter)
      ? `${url.route}/${parameter}`
      : url.route;

  if (url.type === REQUEST_TYPE.POST) {
    return ApiSauce.post(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.GET) {
    return ApiSauce.get(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.PUT) {
    return ApiSauce.put(_url, data, _header, baseUrl);
  } else if (url.type === REQUEST_TYPE.DELETE) {
    return ApiSauce.delete(_url, data, _header, baseUrl);
  }
  // return ApiSauce.post(url.route, data, _header);
};
