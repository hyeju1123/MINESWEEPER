import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./pages/StartPage";
import PlayPage from "./pages/PlayPage";

export type RootStackParamList = {
  Start: undefined;
  Play: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Play" component={PlayPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
