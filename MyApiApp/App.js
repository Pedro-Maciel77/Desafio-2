import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack=createNativeStackNavigator();

export default function App(){
 return(
  <PaperProvider>
   <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Home" component={Home}/>
     <Stack.Screen name="Details" component={Details}/>
    </Stack.Navigator>
   </NavigationContainer>
  </PaperProvider>
 );
}
