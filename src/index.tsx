// @flow
import React, {useState, useEffect} from 'react';
import {AppRegistry, View, Platform, NativeModules, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {MessageBar} from './components';
import configureStore from './store';
import Routing from './navigator';
import applyConfigSettings from './config';
import AppStyles from './theme/AppStyles';
import Util from './util';
import DataHandler from './services/DataHandler';
import KeyboardManager from 'react-native-keyboard-manager';
import rootReducer from './reducers/rootReducer'; // Adjust the import path to where your rootReducer is defined
import {Store} from 'redux';

LogBox.ignoreAllLogs();

applyConfigSettings();

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [store, setStore] = useState<Store | null>(null);

  useEffect(() => {
    const loadStore = async () => {
      const configuredStore = await configureStore(rootReducer);
      setStore(configuredStore);
      setLoading(false);
      DataHandler.setStore(configuredStore);
    };

    loadStore();
  }, []);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnableAutoToolbar(true);
      KeyboardManager.setToolbarPreviousNextButtonEnable(true);
    }
  }, []);



  if (isLoading || !store) {
    return null;
  }

  return (
    <View style={AppStyles.flex}>
      <Provider store={store}>
        <Routing />
      </Provider>
      <MessageBar />
    </View>
  );
};

AppRegistry.registerComponent('react-native-auth-app', () => App);

export default App;
