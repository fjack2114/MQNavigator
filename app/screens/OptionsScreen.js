import React from "react";
import { StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import MainBanner from "../components/MainBanner";

function OptionsScreen(props) {
  return (
    <AppScreen>
      <MainBanner />
      <AppText>This is Accounts Screen</AppText>
      <View style={styles.container}></View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    height: 160,
    width: 220,
    marginTop: 150,
    alignSelf: "center",
  },
});

export default OptionsScreen;
