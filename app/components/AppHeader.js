import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";

function AppHeader(props) {
  return (
    <View>
      <Image source={require("../assets/MQLogo.png")} style={styles.image} />
      <AppText>Sign In</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {},
});

export default AppHeader;
