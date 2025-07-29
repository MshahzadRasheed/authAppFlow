import React from 'react';
import {TextProps} from 'react-native';
import {ButtonView, Text} from '../../components';
import styles from './styles';
import {Colors, Metrics} from '../../theme';

interface ButtonViewProps extends TextProps {
  text: String;
  buttonStye?: {};
  textColor?: any;
  onPress: any;
}

const AppButton: React.FC<ButtonViewProps> = ({
  text = '',
  buttonStye = styles.buttonStyle,
  textColor = Colors.text.black,
  onPress,
}) => {
  return (
    <ButtonView style={[styles.buttonStyle, buttonStye]} onPress={onPress}>
      <Text size={'buttonText'} type="medium" color={textColor}>
        {text}
      </Text>
    </ButtonView>
  );
};

export default AppButton;
