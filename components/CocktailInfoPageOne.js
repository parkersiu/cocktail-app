import { View, Text, StyleSheet, ScrollView } from "react-native";

import { useCocktailStore } from "../store/store";

let ingredients = [];

function findIngredients(cocktail) {
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

export default function CocktailInfoPageOne() {
  const cocktail = useCocktailStore((state) => state.cocktail);
  findIngredients(cocktail);

  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.descriptionBody}>
            This classic cocktail is known for its combination of tequila,
            triple sec, and lime juice, served in a salt-rimmed glass
          </Text>
        </View>
        <View style={styles.line} />
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingTop: 15,
  },
  descriptionHeader: {
    fontSize: 18,
  },
  descriptionBody: {
    fontSize: 15,
    color: "#949598",
    paddingTop: 9,
  },
  ingredientsContainer: {
    paddingTop: 15,
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
