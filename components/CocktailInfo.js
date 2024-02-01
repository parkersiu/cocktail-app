import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import CocktailInfoPageOne from "./CocktailInfoPageOne";
import CocktailInfoPageTwo from "./CocktailInfoPageTwo";

export default function CocktailInfo() {
  return (
    <View style={styles.mainContainer}>
      <Swiper horizontal={true} loop={false} showsPagination={true}>
        <CocktailInfoPageOne />
        <CocktailInfoPageTwo />
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
