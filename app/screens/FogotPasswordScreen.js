import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";

function ForgotPasswordScreen() {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/MQNav1.png")}
        style={styles.background}
      ></ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default ForgotPasswordScreen;
