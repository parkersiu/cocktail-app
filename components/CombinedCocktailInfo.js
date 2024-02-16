import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect } from "react";

import { useCocktailStore } from "../store/store";

let ingredients = [];

function findIngredients(cocktail) {
  ingredients = [];
  // Loop through each property in the object
  for (const key in cocktail) {
    if (cocktail.hasOwnProperty(key)) {
      // Check if the property starts with "strIngredient" and ends with a number
      const ingredientMatch = key.match(/^strIngredient(\d+)$/);

      if (ingredientMatch) {
        let currentIngredient = cocktail[key];

        // Check if the current ingredient is not null
        if (currentIngredient !== null) {
          // Extract the matched number and increment it by 1
          const currentNumber = parseInt(ingredientMatch[1], 10);

          // Construct the corresponding measure key
          const measureKey = `strMeasure${currentNumber}`;

          // Get the measure value
          const measureValue = cocktail[measureKey] || "";

          // Create an object and add it to the ingredients array
          ingredients.push({
            ingredient: currentIngredient,
            measure: measureValue,
          });
        }
      }
    }
  }
}

export default function CombinedCocktailInfo() {
  const cocktail = useCocktailStore((state) => state.cocktail);

  useEffect(() => {
    findIngredients(cocktail);
  }, [cocktail]);

  return (
    <ScrollView>
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsHeader}>Ingredients</Text>
        <View style={styles.itemsContainer}>
          {ingredients.map((item, i) => (
            <Text
              style={styles.ingredientsItems}
              key={i}
            >{`\u2022 ${item.measure} ${item.ingredient}`}</Text>
          ))}
        </View>
      </View>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsHeader}>Instructions</Text>
        <Text style={styles.instructionsBody}>
          {cocktail["strInstructions"]}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  instructionsContainer: {
    paddingVertical: 5,
  },
  instructionsHeader: {
    fontSize: 18,
  },
  instructionsBody: {
    fontSize: 15,
    color: "#949598",
    paddingTop: 9,
  },
  line: {
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  ingredientsContainer: {
    paddingVertical: 15,
  },
  ingredientsHeader: {
    paddingBottom: 9,
    fontSize: 18,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ingredientsItems: {
    fontSize: 16,
    color: "#949598",
    lineHeight: 25,
    width: "50%",
  },
  line: {
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scrollView: {
    paddingBottom: 50,
  },
});
