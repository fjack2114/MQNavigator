import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabNavigator from "./app/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
