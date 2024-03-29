import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppColors from "../config/AppColors";

import AppText from "./AppText";

function AppHeader({ title }) {
  return (
    <>
      <View>
        <Image
          source={require("../assets/MQNav1TopHalf.png")}
          style={styles.topHalf}
        />
      </View>
      <View style={styles.container}>
        <Image source={require("../assets/MQLogo.png")} style={styles.image} />
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
  },
  image: {
    marginTop: 50,
    height: 50,
    width: 175,
    backgroundColor: "red",
    alignSelf: "center",
  },
  text: {
    color: AppColors.White,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 22,
    alignSelf: "center",
    marginTop: 70,
  },
  topHalf: {
    alignSelf: "center",
  },
});

export default AppHeader;
