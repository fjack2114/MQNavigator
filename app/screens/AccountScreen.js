import React from "react";
import {} from "react-native";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import MainBanner from "../components/MainBanner";

function AccountScreen(props) {
  return (
    <AppScreen>
      <MainBanner />
      <AppText>This is Accounts Screen</AppText>
    </AppScreen>
  );
}

export default AccountScreen;
