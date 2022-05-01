import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "./app/navigation/TabNavigator";
import MapScreen from "./app/screens/MapScreen";
import CalendarScreen from "./app/screens/CalendarScreen";
import HBATScreen from "./app/screens/HBATScreen";

export default function App() {
  return (
    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>

    <HBATScreen />
  );
}
