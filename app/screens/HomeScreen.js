import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import MainBanner from "../components/MainBanner";
import ProfileContainer from "../components/ProfileContainer";
import AppColors from "../config/AppColors";

function HomeScreen(props) {
  return (
    <AppScreen>
      <MainBanner icon={"autorenew"} />
      <ProfileContainer />
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.options}
            source={require("../assets/meetup.png")}
          />
          <AppText style={styles.text}>Next Event</AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.options}
            source={require("../assets/Venues.png")}
          />
          <AppText style={styles.text}>Venues</AppText>
        </TouchableOpacity>
        <View style={styles.smallSelections}>
          <TouchableOpacity>
            <View style={styles.small}>
              <Image
                style={styles.image}
                source={require("../assets/googlemaps.jpg")}
              />
            </View>
            <AppText style={styles.text}>Maps</AppText>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.small}>
              <Image
                style={styles.image}
                source={require("../assets/googlecalendar.png")}
              />
            </View>
            <AppText style={styles.text}>Calendar</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width: 330,
    alignSelf: "center",
    marginTop: 35,
    justifyContent: "space-between",
  },
  image: {
    height: 80,
    width: 100,
    alignSelf: "center",
    borderRadius: 10,
  },
  options: {
    width: 330,
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: AppColors.Charcoal,
    borderWidth: 1,
  },
  small: {
    width: 160,
    height: 100,
    borderRadius: 10,
    borderColor: AppColors.Charcoal,
    borderWidth: 1,
    justifyContent: "center",
  },
  smallSelections: {
    width: 330,
    height: 100,
    alignSelf: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    color: AppColors.Charcoal,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 10,
    marginLeft: 5,
  },
});

export default HomeScreen;
