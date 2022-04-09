import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppColors from "../config/AppColors";
import ActionButton from "./ActionButton";
import AppTextInput from "./AppTextInput";

function ForgotContainer({ onPress }) {
  return (
    <View style={styles.container}>
      <View>
        <AppTextInput
          icon={"email"}
          placeholder={"Email"}
          placeholderTextColor={AppColors.Charcoal}
        />
        <View style={styles.line} />
      </View>
      <View>
        <AppTextInput
          icon={"lock"}
          placeholder={"New Password"}
          placeholderTextColor={AppColors.Charcoal}
        />
        <View style={styles.line} />
      </View>
      <View>
        <AppTextInput
          icon={"lock"}
          placeholder={"Confirm Password"}
          placeholderTextColor={AppColors.Charcoal}
        />
        <View style={styles.line} />
      </View>
      <View style={styles.button}>
        <ActionButton title="Reset Password" onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
  container: {
    height: 250,
    width: 395,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: AppColors.White,
  },
  filler: {
    height: 25,
    width: 225,
  },
  line: {
    width: 225,
    height: 1,
    backgroundColor: AppColors.BrightRed,
    margin: 1,
  },
});

export default ForgotContainer;
