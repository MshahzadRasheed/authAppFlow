import React, {useState, useEffect} from 'react';
import {View, StatusBar, ActivityIndicator, Animated} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import styles from './styles';
import {Text} from '../';
import {Colors} from '../../theme';

interface LoaderProps {
  loading: boolean;
  loadingFor?: string;
  backdropOpacity?: number;
  progress?: number | null;
}

const Loader: React.FC<LoaderProps> = ({
  loading,
  loadingFor,
  backdropOpacity,
  progress,
}) => {
  const [loaderAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    return Animated.timing(loaderAnimation, {
      toValue: (200 * (progress || 0)) / 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [loaderAnimation, progress]);

  return (
    <View>
      <StatusBar networkActivityIndicatorVisible={loading} />
      <Modal
        isVisible={loading}
        style={styles.modal}
        animationIn="fadeIn"
        backdropOpacity={backdropOpacity}
        animationOut="fadeOut">
        <View style={styles.container}>
          {progress === null && (
            <ActivityIndicator color={Colors.white} animating size="large" />
          )}
          {progress !== null && (
            <View style={styles.progressBarContainer}>
              <Animated.View
                style={[
                  styles.progressBar,
                  {
                    width: loaderAnimation,
                  },
                ]}
              />
            </View>
          )}
          {loadingFor !== '' && (
            <Text
              size="small"
              type="base"
              color={Colors.white}
              style={{marginTop: 10}}>
              {loadingFor}
            </Text>
          )}
        </View>
      </Modal>
    </View>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadingFor: PropTypes.string.isRequired,
  backdropOpacity: PropTypes.number.isRequired,
  progress: PropTypes.number,
};

Loader.defaultProps = {
  loading: false,
  loadingFor: '',
  backdropOpacity: 0.3,
  progress: null,
};

export default Loader;
