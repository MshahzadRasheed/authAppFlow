// @flow
import _ from 'lodash';
import {ApiResponse, create} from 'apisauce';
import axios, {Canceler} from 'axios';
import {eventChannel, END} from 'redux-saga';
import {
  API_LOG,
  BASE_URL,
  API_TIMEOUT,
  ERROR_SOMETHING_WENT_WRONG,
  ERROR_CANCEL_ERROR,
  ERROR_NETWORK_NOT_AVAILABLE,
} from '../config/WebService';
import {logoutUserHelper} from '../helpers/UserHelper';

const api = create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

class ApiSauce {
  async post(url: string, data: any, headers: any, baseUrl: string) {
    api.setBaseURL(baseUrl);
    const response = await api.post(url, data, {
      headers,
    });

    if (__DEV__ && API_LOG) {
      console.log('url', url);
      console.log('data', data);
      console.log('headers', headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async get(url: string, data: {} | undefined, headers: any, baseUrl: string) {
    api.setBaseURL(baseUrl);
    const response = await api.get(url, data, {
      headers,
    });

    if (__DEV__ && API_LOG) {
      console.log('url', url);
      console.log('headers', headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async delete(url: string, data: any, headers: any, baseUrl: string) {
    api.setBaseURL(baseUrl);
    const response = await api.delete(
      url,
      {},
      {
        headers,
      },
    );

    if (__DEV__ && API_LOG) {
      console.log('url', url);
      console.log('headers', headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  async put(url: string, data: any, headers: any, baseUrl: string) {
    api.setBaseURL(baseUrl);
    const response = await api.put(url, data, {
      headers,
    });

    if (__DEV__ && API_LOG) {
      console.log('url', url);
      console.log('data', data);
      console.log('headers', headers);
      console.log(response);
    }

    return this.manipulateResponse(response);
  }

  postWithProgress(url: string, data: any, headers: any) {
    if (__DEV__ && API_LOG) {
      // console.log("url", url);
      // console.log("headers", headers);
    }
    const {CancelToken} = axios;
    let cancel: Canceler;
    return eventChannel(emitter => {
      api
        .post(url, data, {
          headers,
          cancelToken: new CancelToken(c => {
            // An executor function receives a cancel function as a parameter
            cancel = c;
          }),
          onUploadProgress: (e: any) => {
            if (e.lengthComputable) {
              const progress = Math.round((e.loaded / e.total) * 100);
              emitter({progress, cancelToken: cancel});
            }
          },
        })
        .then(
          (response: any) => {
            if (response.ok && response.data && !response.data.error) {
              emitter({success: response.data});
              emitter(END);
            } else if (response.problem === 'NETWORK_ERROR') {
              emitter({err: ERROR_NETWORK_NOT_AVAILABLE});
              emitter(END);
            } else if (response.problem === 'CANCEL_ERROR') {
              emitter({cancelled: ERROR_CANCEL_ERROR});
              emitter(END);
            } else {
              emitter({err: ERROR_SOMETHING_WENT_WRONG});
              emitter(END);
            }
          },
          err => {
            if (err.problem === 'NETWORK_ERROR') {
              emitter({err: ERROR_NETWORK_NOT_AVAILABLE});
              emitter(END);
            } else if (err.problem === 'CANCEL_ERROR') {
              emitter({cancelled: ERROR_CANCEL_ERROR});
              emitter(END);
            } else {
              emitter({err: ERROR_SOMETHING_WENT_WRONG});
              emitter(END);
            }
          },
        );

      return () => {};
    });
  }

  manipulateResponse(response: ApiResponse<any, any>) {
    return new Promise((resolve, reject) => {
      if (response.ok && response.data && !response.data.error) {
        resolve(response.data);
      } else {
        if (
          response.status === 401 &&
          response.data.message === 'Unauthenticated'
        ) {
          // session expired, logout user forcefully
          logoutUserHelper();
        }

        if (response.status === 500) {
          reject(ERROR_SOMETHING_WENT_WRONG);
        }

        if (response.problem === 'NETWORK_ERROR') {
          reject(ERROR_NETWORK_NOT_AVAILABLE);
        }

        reject(response.data || ERROR_SOMETHING_WENT_WRONG);
      }
    });
  }
}

export default new ApiSauce();
