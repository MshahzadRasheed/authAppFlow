import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {SPLASH_BG} from '../../../constants/AssetSVGConstants';

interface IImageTextComponent {
  svgImage: any;
  title: string;
  text: string;
}

const ImageTextComponent: React.FC<IImageTextComponent> = ({
  svgImage,
  title,
  text,
}) => {
  return (
    <View>
      <View style={styles.image}>{svgImage}</View>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ImageTextComponent;
