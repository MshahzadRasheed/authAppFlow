import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    position: 'absolute',
    alignSelf: 'center',
    // alignItems: 'center',
    // marginLeft: 200,
    // top: 300,
  },
  image: {
    marginTop: Metrics.ratio(130),
    alignSelf: 'center',
  },
  heading: {
    fontFamily: Fonts.type.bold,
    lineHeight: Metrics.ratio(27),
    alignSelf: 'center',
    fontSize: Metrics.ratio(18),
    marginTop: Metrics.ratio(40),
  },
  text: {
    fontFamily: Fonts.type.regular,
    paddingTop: Metrics.ratio(32),
    color: Colors.textLight,
    fontSize: Metrics.ratio(16),
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: Metrics.ratio(40),
  },
});
