// @flow
import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {USER_SIGN_IN} from '../actions/ActionTypes';

const initialState = Immutable({
  data: {},
  access_token: '',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGN_IN.SUCCESS: {
      const {data} = action;

      return Immutable.merge(state, {
        data: data,
        access_token: action.access_token,
      });
    }
    default:
      return state;
  }
};
