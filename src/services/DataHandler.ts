import {NativeModules} from 'react-native';
import {Store} from 'redux';

class DataHandler {
  store: Store | undefined;
  recentlyLoggedIn = false;
  appLozic = NativeModules.ApplozicChat;

  setStore(store: Store) {
    this.store = store;
  }

  setRecentlyLoggedIn(recentlyLoggedIn: boolean) {
    this.recentlyLoggedIn = recentlyLoggedIn;
  }

  getStore() {
    return this.store;
  }

  getRecentlyLoggedIn() {
    return this.recentlyLoggedIn;
  }

  getAppLozic() {
    return this.appLozic;
  }
}

export default new DataHandler();
