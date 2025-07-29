import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {SPLASH_BG, SPLASH_LOGO} from '../../../constants/AssetSVGConstants';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {SPLASH} from '../../../constants/StringConstants';
import Routes from '../../../constants/RouteConstants';

const Splash = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const opacityAnimFade = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(200)).current;
  const navigation = useNavigation();

  const fadeInFromBottom = () => {
    return Animated.timing(translateYAnim, {
      toValue: 0.8,
      duration: 900, // Set to the same duration as the other animation
      easing: Easing.out(Easing.circle),
      useNativeDriver: true,
    });
  };

  const animate = () => {
    return Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.circle), // Use easing function of your choice
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.circle), // Use easing function of your choice
        useNativeDriver: true,
      }),
    ]);
  };

  const fadeOut = () => {
    Animated.timing(opacityAnimFade, {
      toValue: 0,
      duration: 250,
      easing: Easing.out(Easing.circle), // Use easing function of your choice
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const combinedAnimation = Animated.parallel([
      fadeInFromBottom(),
      animate(),
    ]);

    combinedAnimation.start(() => {
      setTimeout(() => {
        fadeOut();
        SplashScreen.hide();
        (navigation.navigate as (route: string) => void)(Routes.ONBOARDING);
      }, 500);
    });
  }, []);

  const scale = {
    transform: [{scale: scaleAnim}],
    opacity: opacityAnim,
  };

  const scaleOut = {
    opacity: opacityAnimFade,
  };

  const translateY = {
    transform: [{translateY: translateYAnim}],
  };

  const getInitialRouteName = () => {
    const isFirstLogin = true; //write async storage logic here
    return isFirstLogin ? 'onboarding' : 'login';
  };

  return (
    <View>
      <View style={styles.container}>
        <SPLASH_BG />
      </View>
      <View style={styles.animationContainer}>
        <Animated.View style={[scale, scaleOut]}>
          <SPLASH_LOGO />
        </Animated.View>
      </View>
      <Animated.View style={[translateY, scaleOut]}>
        <View style={styles.textContainerStyle}>
          <Text style={styles.title}>{SPLASH.AUTHAPP}</Text>
          <Text style={styles.text}>{SPLASH.VALUE_BASED}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Splash;
