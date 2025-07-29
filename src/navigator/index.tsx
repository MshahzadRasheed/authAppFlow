import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import SplashScreen from 'react-native-splash-screen';

import AuthStack from './AuthStack';
import SplashScreen from 'react-native-splash-screen';
import Splash from '../components/Auth/Splash/Splash';

const Stack = createNativeStackNavigator();

const Routing: React.FC = () => {
  const [initialRouteName, setInitialRouteName] = useState<string>('auth');


  return (
    <NavigationContainer>
      {/* <Splash /> */}
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          contentStyle: {backgroundColor: 'transparent'},
          animation: 'simple_push',
        }}>
        <Stack.Screen
          name="auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
