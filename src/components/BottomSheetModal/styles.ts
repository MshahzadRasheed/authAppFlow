import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    height: '45%',
  },
  modalContainer: {
    margin: 0,
  },
  modalView: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: Metrics.ratio(40),
    borderTopRightRadius: Metrics.ratio(40),
    // padding: 20,
    margin: 0,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
  },
  handle: {
    width: Metrics.ratio(45),
    height: Metrics.ratio(6),
    position: 'absolute',
    top: Metrics.ratio(10),
    backgroundColor: Colors.handle,
    alignSelf: 'center',
    borderRadius: Metrics.ratio(8),
    marginTop: Metrics.ratio(5),
  },
  children: {
    marginTop: 30,
  },
});
