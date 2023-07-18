import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/home";
import { CardInfo } from "../screens/card-info/CardInfo";

const { Screen, Navigator, Group } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="cardInfo" component={CardInfo} />
      </Group>
    </Navigator>
  );
}
