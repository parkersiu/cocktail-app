import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, memo } from "react";

import Button from "./Button";

export default memo(function SelectionScreen({
  navigation,
  setCocktail,
  setAlcoholType,
}) {
  const [active, setActive] = useState(-1);

  let data = [];

  const alcohols = [
    { type: "Vodka", image: require("../assets/cocktail.jpg") },
    { type: "Gin", image: require("../assets/cocktail.jpg") },
    { type: "Whiskey", image: require("../assets/cocktail.jpg") },
    { type: "Tequila", image: require("../assets/cocktail.jpg") },
    { type: "Rum", image: require("../assets/cocktail.jpg") },
    { type: "Brandy", image: require("../assets/cocktail.jpg") },
  ];

  const getCocktailByIngredient = async (alcohol) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcohol}`
      );
      const json = await response.json();
      data.push(json["drinks"]);
    } catch (error) {
      console.error(error);
    }
  };

  const getCocktailById = async (id) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const json = await response.json();
      setCocktail(json["drinks"]);
    } catch (error) {
      console.error(error);
    }
  };

  const randomAlcohol = (data) => {
    return data[0][Math.floor(Math.random() * data.length)];
  };

  const buttonAction = async () => {
    if (active > -1) {
      await getCocktailByIngredient(alcohols[active]["type"]);
      await getCocktailById(randomAlcohol(data)["idDrink"]);
      setAlcoholType(alcohols[active]["type"]);
      setActive(-1);
      data = [];
      navigation.navigate("Cocktail");
    } else {
      alert("Please make a selection");
    }
  };
  const handleSelect = (index) => {
    setActive(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          Select which alcohol you would like to use
        </Text>
      </View>
      <View style={styles.alcoholsContainer}>
        {alcohols.map((alcohol, i) => (
          <View key={i} style={styles.itemContainer}>
            <Pressable onPress={() => handleSelect(i)}>
              <Image
                source={alcohol.image}
                style={
                  active === i
                    ? [styles.alcoholImage, styles.active]
                    : [styles.alcoholImage]
                }
              />
              <Text style={styles.alcoholText}>{alcohol.type}</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button buttonText={"Search"} action={buttonAction} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  headingContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 70,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  alcoholsContainer: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  alcoholImage: {
    height: 140,
    width: 140,
    borderRadius: 100,
  },
  alcoholText: {
    fontStyle: "normal",
    color: "#000",
    paddingTop: 6,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    borderColor: "green",
    borderWidth: 5,
  },
});
