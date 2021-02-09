import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "../Components/OnboardingScreen";
import RestaurantDetailScreen from "../Components/RestaurantDetailScreen";
import RestaurantListScreen from "../Components/RestaurantListScreen";
import Global from "../Ressources/Globals";

const Stack = createStackNavigator();
function Navigation({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            title: "Bienvenu",
            headerTintColor: Global.COLORS.primary,
          }}
        />
        <Stack.Screen
          name="RestaurantDetailScreen"
          component={RestaurantDetailScreen}
          options={{
            title: "Detail",
          }}
        />
        <Stack.Screen
          name="RestaurantListScreen"
          component={RestaurantListScreen}
          options={{
            title: "RestaurantListScreen",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
