import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import ActionButton from "../components/ActionButton";
import AppHeader from "../components/AppHeader";

import AppScreen from "../components/AppScreen";
import ForgotContainer from "../components/ForgotContainer";

function ForgotPasswordScreen({ navigation }) {
  return (
    <AppScreen>
      <AppHeader title={"Forgot Password"} />
      <KeyboardAvoidingView
        style={styles.infoContainer}
        behavior="position"
        keyboardVerticalOffset={50}
      >
        <ForgotContainer onPress={() => navigation.navigate("Home")} />
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

export default ForgotPasswordScreen;
