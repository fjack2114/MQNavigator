import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function WelcomeButton({
  title,
  buttonColor = "Charcoal",
  color = "White",
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.button, { backgroundColor: AppColors[buttonColor] }]}
      >
        <AppText style={[styles.text, { color: AppColors[color] }]}>
          {title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 175,
    height: 50,
    borderRadius: 10,
    //   backgroundColor: AppColors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "MontserratAlternates_400Regular",
    //    color: AppColors.white,
  },
});

export default WelcomeButton;
