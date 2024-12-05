import "react-native-reanimated";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="Signup"
          options={{ headerShown: false }}
          component={SignupScreen}
        ></Stack.Screen>
      </Stack.Navigator>

  );
}


