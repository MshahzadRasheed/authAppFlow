import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
  },
  animationContainer: {
    marginTop: Metrics.ratio(200),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.ratio(20),
  },
  textContainerStyle: {
    marginTop: Metrics.ratio(180),
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Metrics.ratio(26.35),
    textAlign: 'center',
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(12.28),
    textAlign: 'center',
  },
});
