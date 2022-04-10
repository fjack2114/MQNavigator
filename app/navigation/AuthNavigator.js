import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "../screens/SignInScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ForgotPasswordScreen from "../screens/FogotPasswordScreen";
import TabNavigator from "./TabNavigator";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="SignIn"
      component={SignInScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Forgot"
      component={ForgotPasswordScreen}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AuthNavigator;
