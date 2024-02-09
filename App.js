import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Feather, FontAwesome6 } from "@expo/vector-icons";

import { useCocktailStore } from "./store/store";
import fetchCocktail from "./library/fetchCocktail";

import NavHeader from "./components/NavHeader";
import HomeScreen from "./components/HomeScreen";
import SelectionScreen from "./components/SelectionScreen";
import CocktailScreen from "./components/CocktailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [alcohol, setCocktail, setCocktailData, setStatus] = useCocktailStore(
    (state) => [
      state.alcohol,
      state.setCocktail,
      state.setCocktailData,
      state.setStatus,
    ]
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Selection" options={{ headerShown: false }}>
          {(props) => <SelectionScreen navigation={props.navigation} />}
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
              <FontAwesome6
                name="dice-six"
                size={32}
                color="white"
                onPress={() =>
                  fetchCocktail(
                    alcohol,
                    setCocktail,
                    setCocktailData,
                    setStatus
                  )
                }
              />
            ),
            headerTitle: () => <NavHeader />,
            headerTransparent: true,
          })}
          component={CocktailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navButton: {
    borderRadius: 100,
  },
});
