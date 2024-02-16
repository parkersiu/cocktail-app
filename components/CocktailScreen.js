import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { memo } from "react";

import { useCocktailStore } from "../store/store";

import CocktailInfo from "./CocktailInfo";
import ImageViewer from "./ImageViewer";

export default memo(function CocktailScreen({ navigation }) {
  const imageSource =
    { uri: useCocktailStore((state) => state.cocktail["strDrinkThumb"]) } ||
    require("../assets/cocktail.jpg");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={imageSource} />
      </View>
      <CocktailInfo />
      <StatusBar style="auto" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  imageContainer: {
    flex: 2,
  },
});
