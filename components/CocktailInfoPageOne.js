import { View, Text, StyleSheet } from "react-native";

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

export default function CocktailInfoPageOne({ cocktail }) {
  findIngredients(cocktail);

  return (
    <View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionBody}>
          This classic cocktail is known for its combination of tequila, triple
          sec, and lime juice, served in a salt-rimmed glass
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsHeader}>Ingredients</Text>
        {ingredients.map((item, i) => (
          <Text
            style={styles.ingredientsItems}
            key={i}
          >{`\u2022 ${item.measure}${item.ingredient}`}</Text>
        ))}
      </View>
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
  ingredientsItems: {
    fontSize: 16,
    color: "#949598",
    lineHeight: 25,
  },
  line: {
    paddingVertical: 10,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
