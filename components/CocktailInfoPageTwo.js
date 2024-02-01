import { View, Text, StyleSheet } from "react-native";

export default function CocktailInfoPageTwo({ cocktail }) {
  return (
    <View>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsHeader}>Instructions</Text>
        <Text style={styles.instructionsBody}>
          {cocktail["strInstructions"]}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  instructionsContainer: {
    paddingTop: 15,
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
});
