import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import ResultNumberScreen from "../screen/ResultNumberScreen";
import DetailsScreen from "../screen/DetailsScreen";

export type RootStackParams = {
  HomeScreen: undefined;
  ResultNumberScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ResultNumberScreen" component={ResultNumberScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
