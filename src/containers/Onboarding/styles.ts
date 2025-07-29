import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipButtonContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.05,
    zIndex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    top: Metrics.ratio(60),
  },
  dot: {
    width: Metrics.ratio(5),
    height: Metrics.ratio(5),
    borderRadius: Metrics.ratio(5),
    marginHorizontal: Metrics.ratio(5),
    backgroundColor: Colors.lightGray,
  },
  activeDot: {
    width: Metrics.ratio(15),
    height: Metrics.ratio(5),
    borderRadius: Metrics.ratio(5),
    marginHorizontal: Metrics.ratio(5),
    backgroundColor: Colors.black,
  },
  paginationStyle: {
    bottom: Metrics.ratio(60),
  },
  skipText: {
    color: Colors.black,
    textAlign: 'right',
  },
  signInButtonStyle: {
    marginBottom: 92,
    paddingHorizontal: 100,
    backgroundColor: Colors.white,
    color: Colors.black,
  },
  createAccountButtonStyle: {
    marginBottom: 10,
    //paddingHorizontal: 100,
  },
  // To be shifted to a separate file when signup flow starts
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Metrics.ratio(22),
    lineHeight: Metrics.ratio(18),
    textAlign: 'center',
    paddingTop: Metrics.ratio(24),
  },
  text: {
    fontFamily: Fonts.type.regular,
    fontSize: Metrics.ratio(16),
    lineHeight: Metrics.ratio(24),
    textAlign: 'center',
    paddingTop: Metrics.ratio(16),
    color: Colors.text.secondary,
    paddingHorizontal: Metrics.ratio(32),
  },
  doneButton: {
    marginTop: 20,
    paddingHorizontal: 100,
  },
  cancelButton: {
    marginTop: 10,
    marginBottom: 92,
    paddingHorizontal: 100,
    backgroundColor: Colors.white,
    color: Colors.black,
  },
});
