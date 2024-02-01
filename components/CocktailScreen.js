import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import CocktailInfo from "./CocktailInfo";
import ImageViewer from "./ImageViewer";

const imageSource = require("../assets/cocktail.jpg");

export default function CocktailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={imageSource} />
      </View>
      <CocktailInfo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  imageContainer: {
    flex: 2,
  },
});
