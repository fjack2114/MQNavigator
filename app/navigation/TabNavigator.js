import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import HBATScreen from "../screens/HBATScreen";
import AccountScreen from "../screens/AccountScreen";
import AppColors from "../config/AppColors";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontFamily: "Montserrat_600SemiBold" },
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: AppColors.BrightRed,
      tabBarInactiveTintColor: AppColors.Charcoal,
      tabBarIcon: ({ focused, color }) => {
        let icon;
        icon = focused ? (color = "orange") : (color = "blue");
      },
    }}
  >
    <AppTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let icon;
          icon = focused ? (color = AppColors.BrightRed) : AppColors.Charcoal;
          return <MaterialCommunityIcons size={30} name="home" color={color} />;
        },
      }}
    />
    <AppTab.Screen
      name="Options"
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let icon;
          icon = focused ? (color = AppColors.BrightRed) : AppColors.Charcoal;
          return (
            <MaterialCommunityIcons size={30} name="timelapse" color={color} />
          );
        },
      }}
    />
    <AppTab.Screen
      name="HBAT"
      component={HBATScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let icon;
          icon = focused ? (color = AppColors.BrightRed) : AppColors.Charcoal;
          return (
            <MaterialCommunityIcons
              size={30}
              name="account-circle"
              color={color}
            />
          );
        },
      }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
