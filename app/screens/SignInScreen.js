import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";

import AppHeader from "../components/AppHeader";
import AppScreen from "../components/AppScreen";
import SignInContainer from "../components/SignInContainer";

function SignInScreen({ navigation }) {
  return (
    <AppScreen>
      <AppHeader title={"Sign In"} />
      <KeyboardAvoidingView
        style={styles.infoContainer}
        behavior="position"
        keyboardVerticalOffset={50}
      >
        <SignInContainer
          onPressSignIn={() => navigation.navigate("Home")}
          onPressForgot={() => navigation.navigate("Forgot")}
        />
      </KeyboardAvoidingView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  infoContainer: {
    position: "absolute",
    marginTop: 400,
    alignSelf: "center",
  },
});

export default SignInScreen;
