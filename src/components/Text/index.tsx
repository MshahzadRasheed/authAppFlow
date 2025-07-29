import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {Text as TextRN, StyleSheet, Platform, TextStyle} from 'react-native';
import {Fonts, Colors} from '../../theme';

interface TextProps extends TextStyle {
  style?: any;
  color?: keyof typeof Colors | string;
  size?: keyof typeof Fonts.size | number;
  type?: keyof typeof Fonts.type;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  includeFontPadding?: boolean;
  children?: any | undefined;
  numberOfLines?: number;
}

const Text: React.FC<TextProps> = props => {
  const {
    style,
    color,
    size,
    type,
    textAlign,
    children,
    includeFontPadding,

    ...rest
  } = props;

  const textStyle = StyleSheet.flatten([
    {
      textAlign,
      fontFamily: Fonts.type[type || 'base'],
      fontSize:
        size && typeof size === 'string' && size in Fonts.size
          ? Fonts.size[size]
          : size,
      color: color,
      backgroundColor: Colors.background,
      includeFontPadding: false,
    },
    style,
  ]);

  return (
    <TextRN style={textStyle} {...rest}>
      {children}
    </TextRN>
  );
};

Text.propTypes = {
  ...TextRN.propTypes,
  color: PropTypes.string,
  includeFontPadding: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(_.keys(Fonts.size)),
    PropTypes.number,
  ]),
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(_.keys(Fonts.type)),
  textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
};

Text.defaultProps = {
  ...TextRN.defaultProps,
  size: 'normal',
  type: 'base',
  color: Colors.white,
  textAlign: 'left',
  includeFontPadding: false,
};

export default Text;
