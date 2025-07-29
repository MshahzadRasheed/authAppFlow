import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Util from '../../util';

interface ButtonViewProps extends TouchableOpacityProps {
  style?: ViewStyle | ViewStyle[];
  rippleOnAndroid?: boolean;
}

const ButtonView: React.FC<ButtonViewProps> = ({
  style = {},
  children,
  rippleOnAndroid = false,
  ...rest
}) => {
  if (Util.isPlatformAndroid() && rippleOnAndroid) {
    return (
      <TouchableNativeFeedback {...rest}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity style={style} activeOpacity={0.7} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonView;
