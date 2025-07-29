import React from 'react';
import {View, Image, SafeAreaView, AppState} from 'react-native';
import {Text, ButtonView} from '../';
import styles from './styles';
import {Images, Colors, AppStyles, Metrics} from '../../theme';
import {PLACEHOLDER_IMAGE} from '../../constants';
import {BACK_ICON} from '../../constants/AssetSVGConstants';

interface Props {
  navigation?: any;
  profileImage?: string;
  hasLogo?: boolean;
  hasBack?: boolean;
  title?: string;
  leftBtnImage?: number;
  leftBtnPress1?: () => void;
  leftBtnPress?: () => void;
  leftBtnText?: string;
  rightBtnImage?: number;
  rightBtnPress?: () => void;
  rightBtnPress1?: () => void;
  rightBtnPress2?: () => void;
  rightBtnPress3?: () => void;
  rightBtnText?: string;
  titleColor?: string;
  hasBorder?: boolean;
  style?: {};
  img1Style?: {};
  imgStyle?: {};
  img3Style?: {};
  hasSearch?: boolean;
  onSearchText?: (text: string) => void;
  isSearching?: boolean;
  showStatus?: boolean;
  logoViewStyle?: {};
  imageName?: string;
  titleImage?: any;
  titleSize?: any;
}

const CustomNavbar: React.FC<Props> = ({
  profileImage = PLACEHOLDER_IMAGE,
  hasLogo = false,
  hasBack = true,
  titleColor = Colors.text.titleColor,
  leftBtnImage,
  leftBtnPress1 = () => {},
  leftBtnPress = () => {},
  leftBtnText = '',
  rightBtnImage,
  rightBtnPress = () => {},
  rightBtnPress1 = () => {},
  rightBtnPress2 = () => {},
  rightBtnPress3 = () => {},
  rightBtnText = '',
  hasBorder = true,
  style = {},
  hasSearch = false,
  onSearchText = () => {},
  isSearching = false,
  showStatus = false,
  logoViewStyle = {},
  img1Style = {},
  imgStyle = {},
  img3Style = {},
  imageName = '',
  titleImage,
  title = '',
  titleSize = '',
}) => {
  const renderLeft = () => {
    const renderBack = hasBack && !leftBtnText && !leftBtnImage;

    return (
      <ButtonView
        onPress={hasBack ? leftBtnPress : undefined}
        style={styles.btnWrapper}>
        {leftBtnText && (
          <Text size="normal" color={Colors.black} type="semi_bold">
            {leftBtnText}
          </Text>
        )}
        {hasBack && <BACK_ICON />}
        {hasLogo && (
          <View style={logoViewStyle}>
            {/* <Image
              resizeMode="contain"
              source={Images[imageName]}
              style={styles.btnImage2}
            /> */}
          </View>
        )}
      </ButtonView>
    );
  };

  const renderRight = () => {
    return (
      <ButtonView onPress={rightBtnPress} style={[styles.btnWrapper]}>
        {rightBtnText && (
          <Text type="medium" numberOfLines={1} size="small">
            {rightBtnText}
          </Text>
        )}
        {rightBtnImage && (
          <Image source={rightBtnImage} style={[styles.btnImage]} />
        )}
      </ButtonView>
    );
  };

  const renderRightMultiple = (
    rightBtnImage1: any,
    rightBtnImage2: any,
    rightBtnImage3: any,
  ) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ButtonView style={img1Style} onPress={rightBtnPress1}>
          {rightBtnImage1}
        </ButtonView>

        <ButtonView style={imgStyle} onPress={rightBtnPress2}>
          {rightBtnImage2}
        </ButtonView>
        <ButtonView style={img1Style} onPress={rightBtnPress3}>
          {rightBtnImage3}
        </ButtonView>
      </View>
    );
  };

  const renderTitle = (titleImage?: any, title?: String, titleSize?: any) => {
    return (
      <View
        style={{
          alignSelf: 'baseline',
          //  backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {titleImage ? (
          titleImage
        ) : (
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: Metrics.ratio(20),
            }}>
            <Text
              color={titleColor || Colors.text.titleColor}
              numberOfLines={1}
              size={titleSize || 'normal'}
              type="semi_bold">
              {title || ''}
            </Text>
            {/*showStatus && renderStatus(status)*/}
          </View>
        )}
      </View>
    );
  };

  const renderSearch = () => {
    return <SearchBar onSearchText={onSearchText} isSearching={isSearching} />;
  };

  const renderProfilePicture = () => {
    return (
      <View>
        <Avatar
          image={profileImage}
          style={{width: 50, height: 50, resizeMode: 'cover'}}
        />
      </View>
    );
  };

  const text = (status: string) => {
    if (status === 'IsOnline') {
      return renderOnLineStatus();
    } else {
      return renderOfflineStatus();
    }
  };

  const renderOnLineStatus = () => {
    return (
      <View style={styles.statusContainer}>
        <Image source={Images.onlineImage} style={styles.statusImage} />
        <Text size="xxSmall" color="green">
          online
        </Text>
      </View>
    );
  };

  const renderOfflineStatus = () => {
    return (
      <View style={styles.statusContainer}>
        <Image source={Images.offlineImage} style={styles.statusImage} />
        <Text size="xxSmall">Offline</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        style,
        hasBorder ? styles.borderBottom : {},
        hasSearch ? styles.searchHeader : {},
      ]}>
      <View
        style={{
          //   backgroundColor: 'green',
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {renderLeft()}
        {renderTitle(titleImage, title, titleSize)}
        {/* {!hasRight && renderRight()}
        {hasProfile && renderProfilePicture()}
        {hasRight && renderRightMultiple()} */}
      </View>
      {/*hasSearch && <View style={styles.centerInner}>{renderSearch()}</View>*/}
    </SafeAreaView>
  );
};

export default CustomNavbar;
