import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppScreen from "./app/components/AppScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignIn from "./app/screens/SignIn";

export default function App() {
  return <SignIn />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
