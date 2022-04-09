import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function ActionButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: AppColors.BrightRed,
    borderRadius: 10,
    height: 35,

    justifyContent: "center",
    width: 220,
  },
  text: {
    fontFamily: "MontserratAlternates_400Regular",
    color: AppColors.White,
    fontSize: 16,
  },
});

export default ActionButton;
