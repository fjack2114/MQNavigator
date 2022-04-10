import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function ProfileContainer(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/4.png")} style={styles.profilePic} />
      <View style={styles.textContainer}>
        <AppText style={styles.text}>Hello, Frederick Jack</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 330,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  text: {
    color: AppColors.Charcoal,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    backgroundColor: AppColors.White,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 15,
  },
});

export default ProfileContainer;
