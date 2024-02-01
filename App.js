import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

import HomeScreen from "./components/HomeScreen";
import SelectionScreen from "./components/SelectionScreen";
import CocktailScreen from "./components/CocktailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Selection"
          component={SelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cocktail"
          component={CocktailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
