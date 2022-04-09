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
import RegisterContainer from "../components/RegisterContainer";

function RegisterScreen({ navigation }) {
  return (
    <AppScreen>
      <AppHeader title={"Register"} />
      <KeyboardAvoidingView
        style={styles.infoContainer}
        behavior="position"
        keyboardVerticalOffset={50}
      >
        <RegisterContainer
          title="Register"
          onPress={() => navigation.navigate("Home")}
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

export default RegisterScreen;
