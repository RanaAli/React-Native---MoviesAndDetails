import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MoviesListScreen from "./presentation/list/MoviesListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Movies list" component={MoviesListScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

