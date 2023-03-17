import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer} from '../components/drawer/Drawer';

import {
  LoginScreen,
  WelcomeScreen,
  OnBoardingScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  PasswordChangedScreen,
  OutfitsScreen,
  FavouritesScreen,
  TransactionsHistoryScreen,
  TestScreen,
} from '../screens';

import {navigationRef} from './navigationUtilities';

/**
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  TestScreen: undefined;
  Welcome: undefined;
  Login: undefined;
  OnBoarding: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  // TODO connect with some Logic
  // const isAuthenticated = false;

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'TestScreen'} // @demo remove-current-line
    >
      <Stack.Screen name="TestScreen" component={TestScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;

export type HomeStackParamList = {
  Outfits: undefined;
  TestScreen: undefined;
  Favourites: undefined;
  EditProfile: undefined;
  History: undefined;
  Settings: undefined;
  Logout: undefined;
};
const DrawerNavigator = createDrawerNavigator<HomeStackParamList>();
const HomeNavigator = () => (
  <DrawerNavigator.Navigator
    screenOptions={{headerShown: false}}
    drawerContent={Drawer as any}>
    <DrawerNavigator.Screen name="TestScreen" component={TestScreen} />
    <DrawerNavigator.Screen name="Outfits" component={OutfitsScreen} />
    <DrawerNavigator.Screen name="Favourites" component={FavouritesScreen} />
    <DrawerNavigator.Screen
      name="History"
      component={TransactionsHistoryScreen}
    />
  </DrawerNavigator.Navigator>
);

export type MainStackParamList = {
  Authentication: undefined;
  Home: undefined;
};
const MainStack = createNativeStackNavigator<MainStackParamList>();

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Authentication" component={AppStack} />
        <MainStack.Screen name="Home" component={HomeNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
