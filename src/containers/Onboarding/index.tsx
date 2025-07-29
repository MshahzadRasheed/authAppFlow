import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import Swiper from 'react-native-swiper';
import ImageTextComponent from '../../components/Onboarding/ImageText';
import {styles} from './styles';
import {
  ONBOARDING_1,
  ONBOARDING_2,
  ONBOARDING_3,
  SPLASH_BG,
} from '../../constants/AssetSVGConstants';
import {ONBOARDING} from '../../constants/StringConstants';
import {AppButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../constants/RouteConstants';
// import BottomSheetModal from '../../components/BottomSheetModal';

const Onboarding = () => {
  const navigation = useNavigation();
  // const [visibleModal, setVisibleModal] = useState(true);

  const slides = [
    {
      index: 1,
      title: ONBOARDING.FIND_AUTHAPPS,
      text: ONBOARDING.TEXT_ONE,
      image: <ONBOARDING_1 />,
    },
    {
      index: 2,
      title: ONBOARDING.MEET_AWESOME_PEOPLE,
      text: ONBOARDING.TEXT_TWO,
      image: <ONBOARDING_2 />,
    },
    {
      index: 3,
      title: ONBOARDING.AUTHAPPS_WITH_FRIENDS,
      text: ONBOARDING.TEXT_THREE,
      image: <ONBOARDING_3 />,
    },
  ];

  const onSkipPressed = () => {
    (navigation.navigate as (route: string) => void)(Routes.LOGIN);
  };

  const onCreateAccountPressed = () => {
    (navigation.navigate as (route: string) => void)(Routes.PROFILE_SETUP);
    console.log('Create Account Pressed');
  };

  const onSignInPressed = () => {
    (navigation.navigate as (route: string) => void)(Routes.LOGIN);
  };

  // const hideModal = () => {
  //   setVisibleModal(!visibleModal);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButtonContainer}
        onPress={onSkipPressed}>
        <Text style={styles.skipText}>{ONBOARDING.SKIP}</Text>
      </TouchableOpacity>
      <View style={{position: 'absolute', alignSelf: 'center'}}>
        <SPLASH_BG />
      </View>
      <Swiper
        loop={false}
        showsPagination={true}
        dotColor="transparent"
        dotStyle={styles.dot}
        paginationStyle={styles.paginationStyle}
        activeDotColor="transparent"
        activeDotStyle={styles.activeDot}>
        {slides.map(slide => (
          <View key={slide.index}>
            <ImageTextComponent
              svgImage={slide.image}
              title={slide.title}
              text={slide.text}
            />
          </View>
        ))}
      </Swiper>
      <View>
        <AppButton
          text={ONBOARDING.CREATE_ACCOUNT}
          textColor="white"
          onPress={onCreateAccountPressed}
          buttonStye={styles.createAccountButtonStyle}
        />
        <AppButton
          text={ONBOARDING.SIGN_IN}
          textColor="black"
          onPress={onSignInPressed}
          buttonStye={styles.signInButtonStyle}
        />
      </View>
      {/* <BottomSheetModal
        visible={visibleModal}
        onClose={onCreateAccountPressed}
        onBackdropPress={hideModal}>
        <View>
          <Text style={styles.title}>{AUTH.AGE_VERIFICATION}</Text>
          <Text style={styles.text}>{AUTH.AGE_VERIFICATION_TEXT}</Text>
          <AppButton
            text={AUTH.DONE}
            textColor="white"
            onPress={{}}
            buttonStye={styles.doneButton}
          />
          <AppButton
            text={AUTH.CANCEL}
            textColor="black"
            onPress={{hideModal}}
            buttonStye={styles.cancelButton}
          />
        </View>
      </BottomSheetModal> */}
    </View>
  );
};

export default Onboarding;
