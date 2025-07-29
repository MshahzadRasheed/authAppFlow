// @flow
import {StyleSheet} from 'react-native';
import {Colors, Metrics, AppStyles} from '../../theme';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
  },
  button: {
    marginTop: Metrics.ratio(30),
  },
  headerText: {
    color: '#000',
    marginTop: Metrics.ratio(40),
    marginBottom: Metrics.ratio(30),
    marginLeft: Metrics.ratio(24),
  },
  emailInputContainer: {
    marginHorizontal: Metrics.ratio(30),
    marginVertical: 20,
  },
  passwordInputContainer: {
    marginHorizontal: Metrics.ratio(30),
    marginVertical: 10,
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginVertical: Metrics.ratio(20),
    marginRight: Metrics.ratio(40),
  },
  socialLoginContainer: {
    alignSelf: 'center',
    borderRadius: 6,
    borderColor: '#DAE0E6',
    borderWidth: 1,
    width: Metrics.ratio(100),
    height: Metrics.ratio(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTextContainer: {
    marginTop: Metrics.ratio(40),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
