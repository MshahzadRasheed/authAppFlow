import {LogBox} from 'react-native';
import DebugSettings from './DebugSettings';

export default () => {
  if (__DEV__) {
    LogBox.ignoreAllLogs(!DebugSettings.yellowBox);
  }
};
