import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

import CocktailHeader from "./CocktailHeader";
import CocktailInfoPageOne from "./CocktailInfoPageOne";
import CocktailInfoPageTwo from "./CocktailInfoPageTwo";

export default function CocktailInfo({ cocktail, alcoholType }) {
  return (
    <View style={styles.mainContainer}>
      <CocktailHeader cocktail={cocktail} alcoholType={alcoholType} />
      <Swiper horizontal={true} loop={false} showsPagination={true}>
        <CocktailInfoPageOne cocktail={cocktail} />
        <CocktailInfoPageTwo cocktail={cocktail} />
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
