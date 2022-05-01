import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import MainBanner from "../components/MainBanner";
import AppColors from "../config/AppColors";

function HBATScreen(props) {
  return (
    <AppScreen>
      <MainBanner icon={"sort-variant"} />

      <View style={styles.container}>
        <MaterialCommunityIcons name="magnify" size={22} style={styles.icon} />
        <TextInput
          color={AppColors.Charcoal}
          placeholder={"Venues"}
          placeholderTextColor={AppColors.Charcoal}
        />
        <TouchableWithoutFeedback>
          <MaterialCommunityIcons
            name="chevron-down"
            size={22}
            style={styles.iconRight}
          />
        </TouchableWithoutFeedback>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 330,
    backgroundColor: AppColors.Sand,
    alignSelf: "center",
    top: 25,
    flexDirection: "row",
    borderRadius: 10,
  },
  icon: {
    marginLeft: 3,
    paddingRight: 5,
    marginTop: 2,
    color: AppColors.Charcoal,
  },
  iconRight: {
    marginLeft: 300,
    marginTop: 8,
    position: "absolute",
  },
  placeholderText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    flex: 1,
  },
});

export default HBATScreen;
