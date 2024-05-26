import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MoviesListScreen from "./presentation/list/MoviesListScreen";
import MoviesDetailsScreen from "./presentation/details/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MoviesList" component={MoviesListScreen}/>
                <Stack.Screen name="MoviesDetails" component={MoviesDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

