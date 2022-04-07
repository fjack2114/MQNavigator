import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import AppHeader from "../components/AppHeader";

import AppScreen from "../components/AppScreen";

function SignIn() {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/MQNav1.png")}
        style={styles.background}
      >
        <AppHeader />
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default SignIn;
