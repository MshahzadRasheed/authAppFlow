import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const DW = (size: number) => (width / guidelineBaseWidth) * size;
const DH = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (DW(size) - size) * factor;

export {DW, DH, moderateScale};
