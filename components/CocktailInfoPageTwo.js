import { View, Text, StyleSheet } from "react-native";

export default function CocktailInfoPageTwo() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerText, styles.hederLeft]}>Vodka</Text>
        <Text style={[styles.headerText, styles.headerRight]}>
          Cocktail Glass
        </Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Bloody Mary</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsHeader}>Instructions</Text>
        <Text style={styles.instructionsBody}>
          Rub the rim of the glass with the lime slice to make the salt stick to
          it. Take care to moisten only the outer rim and sprinkle the salt on
          it. The salt should present to the lips of the imbiber and never mix
          into the cocktail. Shake the other ingredients with ice, then
          carefully pour into the glass.
        </Text>
      </View>
    </View>
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
