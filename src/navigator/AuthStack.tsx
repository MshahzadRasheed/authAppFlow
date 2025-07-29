import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp } from '../containers';
import Home from '../containers/Home';
import Onboarding from '../containers/Onboarding';
import Splash from '../components/Auth/Splash/Splash';
import Routes from '../constants/RouteConstants';
import { useAuth } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: 'white' },
        animation: 'simple_push',
      }}
      initialRouteName={user ? Routes.HOME : 'Splash'}>
      
      {user ? (
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.ONBOARDING}
            component={Onboarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Routes.SIGNUP}
            component={SignUp}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
