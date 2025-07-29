// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'black',
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 6,
    height: Metrics.ratio(50),
    justifyContent: 'center',
    maxHeight: Metrics.ratio(50),
  },
});
