//import {ImageSourcePropType, ViewStyle} from 'react-native';

export type ILoginPayload = {
  email: string;
  password: string;
};
export type ILoginResponse = {
  email: string;
  password: string;
};

export type ISignUp = {
  email: string;
  password: string;
};

export type IForgotPassword = {
  email: string;
};

export interface RootState {
  user: UserState;
}
export interface UserState {
  id: string;
  username: string;
  email: string;
  isLoggedIn: boolean;
  // Add more properties as needed
}
