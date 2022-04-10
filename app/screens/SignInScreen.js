import React, { useState } from "react";
import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppHeader from "../components/AppHeader";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import ActionButton from "../components/ActionButton";

function SignInScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <AppScreen>
      <KeyboardAwareScrollView>
        <AppHeader title={"Sign In"} />
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
            <ActionButton
              title={"Sign In"}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <AppText style={styles.text}>Forgot Password</AppText>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </AppScreen>
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
    marginTop: 50,
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

export default SignInScreen;
