import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { useCocktailStore } from "../store/store";

export default function CocktailHeader() {
  const alcohol = useCocktailStore((state) => state.alcohol);
  const cocktail = useCocktailStore((state) => state.cocktail);

  return (
    <>
      <View style={styles.header}>
        <Text style={[styles.headerText, styles.headerLeft]}>{alcohol}</Text>
        <Text style={[styles.headerText, styles.headerRight]}>
          {cocktail["strGlass"]}
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>{cocktail["strDrink"]}</Text>
      </View>
      <View style={styles.line} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
  },
  headerText: {
    position: "absolute",
    top: 15,
    color: "#949598",
    fontSize: 14,
  },
  headerLeft: {
    left: 0,
  },
  headerRight: {
    right: 0,
  },
  title: {
    paddingTop: 40,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  line: {
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
