import React from "react";
import { StyleSheet, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import ActionButton from "../components/ActionButton";
import AppHeader from "../components/AppHeader";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";

function RegisterScreen({ navigation }) {
  return (
    <AppScreen>
      <KeyboardAwareScrollView>
        <AppHeader title={"Register"} />
        <View style={styles.container}>
          <View>
            <AppTextInput
              icon={"account"}
              placeholder={"Full Name"}
              placeholderTextColor={AppColors.Charcoal}
            />
            <View style={styles.line} />
          </View>
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
              placeholder={"Password"}
              placeholderTextColor={AppColors.Charcoal}
            />
            <View style={styles.line} />
          </View>
          <View style={styles.button}>
            <ActionButton
              title="Register"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    position: "absolute",
    marginTop: 400,
    alignSelf: "center",
  },
  button: {
    marginTop: 50,
  },
  container: {
    marginTop: 50,
    height: 250,
    width: 395,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
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

export default RegisterScreen;
