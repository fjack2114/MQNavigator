import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";

import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import WelcomeButton from "../components/WelcomeButton";

function WelcomeScreen() {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/MQBackground.jpg")}
        style={styles.background}
      >
        <View style={styles.container}>
          <Image
            source={require("../assets/MQLogo.png")}
            style={styles.image}
          />
          <AppText style={styles.text}>Welcome to the MQ Navigator</AppText>
        </View>
        <View style={styles.button}>
          <WelcomeButton title="Register" buttonColor="Magenta" color="White" />
          <WelcomeButton title="Login" buttonColor="Purple" color="White" />
          <WelcomeButton title="Guest" buttonColor="BrightRed" color="White" />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  button: {
    alignSelf: "center",
    marginTop: 500,
    height: 175,
    position: "absolute",
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: AppColors.White,
    marginTop: 50,
    height: 68,
    width: 200,
    alignSelf: "center",
  },
  image: {
    height: 50,
    width: 175,
    backgroundColor: "red",
    alignSelf: "center",
  },
  text: {
    color: AppColors.Charcoal,
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    alignSelf: "center",
    backgroundColor: AppColors.White,
  },
});

export default WelcomeScreen;
