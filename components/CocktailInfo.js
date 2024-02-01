import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function CocktailInfo() {
  const ingredients = [
    {
      ingredient: "Tequila",
      measure: "1.5 oz",
    },
    {
      ingredient: "Triple Sec",
      measure: "0.5 oz",
    },
    {
      ingredient: "Lime",
      measure: "1 oz",
    },
    {
      ingredient: "Salt",
      measure: "",
    },
  ];

  const renderList = ({ item }) => {
    return (
      <View>
        <Text>{`\u2022 ${item.measure} ${item.ingredient}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
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
      <View style={styles.descriptioncontainer}>
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
          >{`\u2022 ${item.measure} ${item.ingredient}`}</Text>
        ))}
      </View>
      <View style={styles.dotContainer}>
        <Octicons
          name="dot-fill"
          size={18}
          color="#007AFF"
          style={styles.dot}
        />
        <Octicons
          name="dot-fill"
          size={18}
          color="#D9D9D9"
          style={styles.dot}
        />
      </View>
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
  descriptioncontainer: {
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
  dotContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
  },
  dot: {
    paddingHorizontal: 6,
  },
});
