import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColors from "../config/AppColors";

function MainBanner({ icon }) {
  return (
    <View style={styles.top}>
      <Image source={require("../assets/MQLogoSmall.png")} />
      <MaterialCommunityIcons size={35} style={styles.icon} name={icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: AppColors.Charcoal,
    alignSelf: "center",
    marginRight: 10,
  },
  top: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MainBanner;
