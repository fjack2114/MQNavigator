import React from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import ActionButton from "../components/ActionButton";
import AppHeader from "../components/AppHeader";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";

function ForgotPasswordScreen({ navigation }) {
  return (
    <AppScreen>
      <KeyboardAwareScrollView>
        <AppHeader title={"Forgot Password"} />
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
            <ActionButton
              title="Reset Password"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  infoContainer: {
    position: "absolute",
    marginTop: 300,
    alignSelf: "center",
  },
  button: {
    marginTop: 50,
  },
  container: {
    height: 250,
    width: 395,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 50,
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

export default ForgotPasswordScreen;
