import DataHandler from '../services/DataHandler';
//import {userSignOutRequest} from '../actions/UserActions';
import Util from '../util';

const logoutUserHelper = () => {
  //  DataHandler.getStore().dispatch(userSignOutRequest());
  // NavigationPreloadManager.
  setTimeout(() => {
    //  Util.topAlertError(SESSION_EXPIRED_ERROR);
  }, 1000);
};

export {logoutUserHelper};
