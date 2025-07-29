import React, { useRef, useState } from 'react';
import { SafeAreaView, View, TextInput as RNTextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import {
  AppButton,
  ButtonView,
  Text,
  TextInput,
  Loader,
} from '../../components/';
import {
  EMAIL_ICON,
  EYE_CLOSE,
  EYE_OPEN,
  LOCK_ICON,
  SPLASH_BG,
} from '../../constants/AssetSVGConstants';
import styles from './styles';
import { Colors } from '../../theme';
import Routes from '../../constants/RouteConstants';
import Util from '../../util';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigation = useNavigation();
  const [secureText, setSecureText] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  
  const emailRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!Util.isEmailValid(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    setErrors({});
    
    try {
      const result = await login(email, password);
      if (result.success) {
        // Navigation will be handled automatically by AuthStack
      } else {
        Alert.alert('Login Failed', result.error || 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const headerText = () => (
    <Text
      type="semi_bold"
      size={'large'}
      color={Colors.black}
      style={styles.headerText}>
      Sign In
    </Text>
  );

  const footerText = () => (
    <View style={styles.footerTextContainer}>
      <Text color={Colors.text.gray} type="medium" size={'xSmall'}>
        Don't have an account?{' '}
      </Text>
      <ButtonView onPress={() => navigation.navigate(Routes.SIGNUP as never)}>
        <Text
          color={Colors.text.black}
          type="semi_bold"
          size={'xSmall'}>
          Sign Up
        </Text>
      </ButtonView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SPLASH_BG />
      </View>
      {headerText()}
      
      <TextInput
        ref={emailRef}
        containerStyle={styles.emailInputContainer}
        label="Email"
        placeholder="Enter your email"
        leftImage={<EMAIL_ICON />}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
        }}
        onSubmitEditing={() => passwordRef.current?.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && (
        <Text color={Colors.text.red} size="xSmall" style={styles.errorText}>
          {errors.email}
        </Text>
      )}
      
      <TextInput
        ref={passwordRef}
        containerStyle={styles.passwordInputContainer}
        label="Password"
        placeholder="Enter your password"
        leftImage={<LOCK_ICON />}
        rightImage={secureText ? <EYE_CLOSE /> : <EYE_OPEN />}
        onPress={() => setSecureText(!secureText)}
        secureTextEntry={secureText}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
        }}
        onSubmitEditing={handleLogin}
      />
      {errors.password && (
        <Text color={Colors.text.red} size="xSmall" style={styles.errorText}>
          {errors.password}
        </Text>
      )}
      
      <AppButton
        text={'Sign In'}
        onPress={handleLogin}
        textColor={Colors.text.white}
        disabled={loading}
      />
      
      {footerText()}
      <Loader loading={loading} />
    </SafeAreaView>
  );
};

export default Login;
