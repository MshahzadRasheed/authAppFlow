import React, {useRef} from 'react';
import {View, PanResponder, Animated} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './styles';

interface BottomSheetModalProps {
  visible: boolean;
  children: React.ReactElement;
  customStyle?: {};
  onClose?: () => void;
  onBackdropPress?: () => void;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  visible,
  children,
  customStyle,
  onClose,
  onBackdropPress,
}) => {
  const panY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dy: panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          // If dragged downwards more than 50 units, close the modal
          onClose && onClose();
        } else {
          // If not dragged downwards enough, reset to original position
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <Modal
      isVisible={visible}
      style={styles.modalContainer}
      onBackdropPress={onBackdropPress}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      useNativeDriverForBackdrop>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.container,
          customStyle,
          {transform: [{translateY: panY}]},
        ]}>
        <View style={styles.modalView}>
          <View style={styles.handle}></View>
          <View style={styles.children}>{children}</View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheetModal;
