import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Inicio = require("./screens/Inicio");
const Juegos = require("./screens/Juegos");

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        screenOptions={{
          headerStyle:{
            backgroundColor:"#999900"
          }
        }}
      >
        <Drawer.Screen name="Inicio" component={ Inicio }/>
        <Drawer.Screen name="Juegos" component={ Juegos }/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
