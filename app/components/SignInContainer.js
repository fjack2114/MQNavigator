import React, { useState } from "react";
import { View, StyleSheet, Switch, TouchableOpacity } from "react-native";

import AppColors from "../config/AppColors";
import ActionButton from "./ActionButton";
import AppTextInput from "./AppTextInput";
import AppText from "./AppText";

function SignInContainer({ navigation, onPressSignIn, onPressForgot }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View>
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
            placeholder={"Password"}
            placeholderTextColor={AppColors.Charcoal}
          />
          <View style={styles.line} />
        </View>
        <View style={styles.signedIn}>
          <AppText style={styles.text}>Stay Signed In</AppText>
          <Switch
            style={styles.switch}
            value={isEnabled}
            onValueChange={toggleSwitch}
            trackColor={{
              false: AppColors.Charcoal,
              true: AppColors.BrightRed,
            }}
            thumbColor={AppColors.White}
          />
        </View>
        <View style={styles.button}>
          <ActionButton title={"Sign In"} onPress={onPressSignIn} />
        </View>
      </View>
      <View style={styles.forgot}>
        <TouchableOpacity onPress={onPressForgot}>
          <AppText style={styles.text}>Forgot Password</AppText>
        </TouchableOpacity>
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
  switch: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: AppColors.BrightRed,
  },
  forgot: {
    alignSelf: "center",
    marginTop: 5,
  },
  line: {
    width: 225,
    height: 1,
    backgroundColor: AppColors.BrightRed,
    margin: 1,
  },
  signedIn: {
    height: 25,
    width: 225,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    marginTop: 7,
    fontSize: 10,
    fontFamily: "Montserrat_400Regular",
    color: AppColors.BrightRed,
  },
});

export default SignInContainer;
