import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import MapScreen from "./Screens/MapScreen";
import EatsScreen from "./Screens/EatsScreen";
import { Provider } from "react-redux";
import { store } from "./store";
const Stack = createNativeStackNavigator();
function App({ navigation }) {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="MapScreen" component={MapScreen} />
                    <Stack.Screen name="EatsScreen" component={EatsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
export default App;
