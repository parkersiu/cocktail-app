import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useState, useCallback } from "react";
import { Feather, FontAwesome6 } from "@expo/vector-icons";

import NavHeader from "./components/NavHeader";
import NavButtonLeft from "./components/NavButtonLeft";
import NavButtonRight from "./components/NavButtonRight";
import HomeScreen from "./components/HomeScreen";
import SelectionScreen from "./components/SelectionScreen";
import CocktailScreen from "./components/CocktailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [cocktail, setCocktail] = useState(null);
  const [alcoholType, setAlcoholType] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Selection" options={{ headerShown: false }}>
          {(props) => (
            <SelectionScreen
              setCocktail={setCocktail}
              setAlcoholType={setAlcoholType}
              navigation={props.navigation}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Cocktail"
          options={({ navigation }) => ({
            headerLeft: () => (
              <Feather
                name="arrow-left"
                size={32}
                color="white"
                style={styles.navButton}
                onPress={() => navigation.navigate("Selection")}
              />
            ),
            headerRight: () => (
              <FontAwesome6 name="dice-six" size={32} color="white" />
            ),
            headerTitle: () => <NavHeader />,
            headerTransparent: true,
          })}
        >
          {(props) => (
            <CocktailScreen cocktail={cocktail[0]} alcoholType={alcoholType} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navButton: {
    borderRadius: 100,
  },
});
