import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useState, useCallback } from "react";

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
        <Stack.Screen name="Cocktail" options={{ headerShown: false }}>
          {(props) => (
            <CocktailScreen cocktail={cocktail[0]} alcoholType={alcoholType} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
