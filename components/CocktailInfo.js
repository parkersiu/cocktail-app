import { View, StyleSheet } from "react-native";
/* import Swiper from "react-native-swiper"; */

import CocktailHeader from "./CocktailHeader";
import CocktailInfoPageOne from "./CocktailInfoPageOne";
import CocktailInfoPageTwo from "./CocktailInfoPageTwo";
import CombinedCocktailInfo from "./CombinedCocktailInfo";

export default function CocktailInfo() {
  return (
    <View style={styles.mainContainer}>
      <CocktailHeader />
      {/* <Swiper horizontal={true} loop={false} showsPagination={true}>
        <CocktailInfoPageOne />
        <CocktailInfoPageTwo />
      </Swiper> */}
      <CombinedCocktailInfo />
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
