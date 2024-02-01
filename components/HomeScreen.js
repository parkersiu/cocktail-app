import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "./Button";
import ImageViewer from "./ImageViewer";

const landingImage = require("../assets/cocktail.jpg");

export default function HomeScreen({ navigation }) {
  const buttonAction = () => navigation.navigate("Selection");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={landingImage} />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerText}>
          <Text style={styles.heading}>Welcome to cocktail</Text>
          <Text style={styles.subHeading}>
            Select an alcohol type and receive a recipe
          </Text>
        </View>
        <Button buttonText={"Get Started"} action={buttonAction} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    backgroundColor: "#D9D9D9",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: 60,
  },
  footerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "regular",
    color: "#1A1C29",
    paddingBottom: 10,
  },
  subHeading: {
    color: "#797979",
    fontSize: 15,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: "#797979",
    width: "100%",
  },
});
