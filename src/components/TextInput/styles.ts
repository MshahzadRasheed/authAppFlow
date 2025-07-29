// @flow
import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts, AppStyles} from '../../theme';
import {DH, DW} from '../../theme/responsive';

export default StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    marginTop: DH(-10),
    zIndex: 999,
    marginLeft: DW(20),
  },
  inputContainer: {
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 55,
    borderColor: Colors.borderColors.activeBorderColor,
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});
