import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ buttonText, action }) {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        style={[styles.button, { backgroundColor: "#1A1C29" }]}
        onPress={() => alert("You pressed a button")}
      >
        <Text style={styles.buttonLabel}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 20,
    fontStyle: "bold",
  },
});
