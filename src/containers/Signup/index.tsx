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
  USER_ICON,
} from '../../constants/AssetSVGConstants';
import styles from './styles';
import { Colors } from '../../theme';
import Routes from '../../constants/RouteConstants';
import { SIGN_UP } from '../../constants/StringConstants';
import Util from '../../util';

const SignUp: React.FC = () => {
  const { signup } = useAuth();
  const navigation = useNavigation();
  const [secureText, setSecureText] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});

  const nameRef = useRef<RNTextInput>(null);
  const emailRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; password?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!Util.isEmailValid(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      const success = await signup(name, email, password);
      if (success) {
        Alert.alert('Success', 'Account created successfully!', [
          { text: 'OK', onPress: () => navigation.navigate(Routes.HOME as never) }
        ]);
      } else {
        Alert.alert('Error', 'Failed to create account. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Signup failed. Please try again.');
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
      {SIGN_UP.SIGN_UP}
    </Text>
  );

  const footerText = () => (
    <View style={styles.footerTextContainer}>
      <Text color={Colors.text.gray} type="medium" size={'xSmall'}>
        Already have an account?{' '}
      </Text>
      <ButtonView onPress={() => navigation.navigate(Routes.LOGIN as never)}>
        <Text
          color={Colors.text.black}
          type="semi_bold"
          size={'xSmall'}>
          Sign In
        </Text>
      </ButtonView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {headerText()}
      
      <TextInput
        ref={nameRef}
        containerStyle={styles.inputContainer}
        label="Name"
        placeholder="Enter your name"
        leftImage={<USER_ICON />}
        value={name}
        onChangeText={setName}
        onSubmitEditing={() => emailRef.current?.focus()}
        autoCapitalize="words"
      />
      {errors.name && (
        <Text color={Colors.text.red} size="xSmall" style={styles.errorText}>
          {errors.name}
        </Text>
      )}
      
      <TextInput
        ref={emailRef}
        containerStyle={styles.inputContainer}
        label={SIGN_UP.EMAIL_LABEL}
        placeholder={SIGN_UP.EMAIL_PLACEHOLDER}
        leftImage={<EMAIL_ICON />}
        value={email}
        onChangeText={setEmail}
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
        containerStyle={styles.inputContainer}
        label={SIGN_UP.PASSWORD_LABEL}
        placeholder={SIGN_UP.PASSWORD_PLACEHOLDER}
        leftImage={<LOCK_ICON />}
        rightImage={secureText ? <EYE_CLOSE /> : <EYE_OPEN />}
        onPress={() => setSecureText(!secureText)}
        secureTextEntry={secureText}
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={handleSignup}
      />
      {errors.password && (
        <Text color={Colors.text.red} size="xSmall" style={styles.errorText}>
          {errors.password}
        </Text>
      )}

      <AppButton
        text={SIGN_UP.SIGN_UP_BUTTON}
        onPress={handleSignup}
        textColor={Colors.text.white}
        disabled={loading}
      />
      
      {footerText()}
      <Loader loading={loading} />
    </SafeAreaView>
  );
};

export default SignUp;
