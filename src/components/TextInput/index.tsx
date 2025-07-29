import React, {forwardRef, useRef} from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {ButtonView} from '../';
import {Colors, Fonts, Images, Metrics} from '../../theme';
import styles from './styles';
import _ from 'lodash';
import {DH, DW} from '../../theme/responsive';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  containerStyle?: any;
  onPress?: () => void;
  multiline?: boolean;
  placeholderTextColor?: string;
  rightImage?: any;
  leftImage?: any;
  Style?: {};
}

const TextInput: React.ForwardRefRenderFunction<RNTextInput, TextInputProps> = (
  {
    label = '',
    error = '',
    containerStyle = {marginTop: 10},
    onPress,
    multiline = false,
    rightImage,
    leftImage,
    placeholderTextColor = Colors.gray,
    Style,
    placeholder,

    ...rest
  },
  ref,
) => {
  const myRef = ref || useRef<RNTextInput>(null);

  return (
    <View style={containerStyle}>
      <View style={styles.labelContainer}>
        <Text
          style={{
            fontFamily: Fonts.type.semi_bold,
            color: Colors.black,
            fontSize: Fonts.size.xSmall,
          }}>
          {label}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
          {leftImage && leftImage}

          <RNTextInput
            ref={myRef}
            placeholder={placeholder}
            placeholderTextColor={Colors.text.placeHolderTextColor}
            style={{
              marginLeft: 10,
              width: Metrics.screenWidth * 0.65,
              height: 56,
              fontSize: Fonts.size.xSmall,
            }}
            {...rest}
          />
        </View>
        {rightImage && (
          <ButtonView style={{marginRight: 10}} onPress={onPress}>
            {rightImage}
          </ButtonView>
        )}
      </View>
    </View>
  );
};

export default forwardRef(TextInput);

//export default TextInput;
