import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginHorizontal: 40,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.borderColors.dividerColor,
  },
  textContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default styles;
