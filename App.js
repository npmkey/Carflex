import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';  
import VehiclesScreen from './screen/VehiclesScreen';
import UsedVehiclesScreen from './screen/UsedVehiclesScreen';
import CheckInScreen from './screen/CheckInScreen';
import FilterScreen from './screen/FilterScreen';  
import VerificationScreen from './screen/VerificationScreen'; 
import LoginScreen from './screen/LoginScreen';   
import RegisterScreen from './screen/RegisterScreen';  
import SplashScreen from './screen/SplashScreen'; 
import HotelsScreen from './screen/HotelsScreen';
import AboutUsScreen from './screen/AboutUsScreen';
import VehicleRegister from './screen/VehicleRegister';
import Profile from './screen/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="Vehicles" component={VehiclesScreen}/>
        <Stack.Screen name="CheckIn" component={CheckInScreen}/>
        <Stack.Screen name="Verification" component={VerificationScreen}/>
        <Stack.Screen name="Filter" component={FilterScreen}/>
        <Stack.Screen name="UsedVehicles" component={UsedVehiclesScreen}/>
        <Stack.Screen name="Hotels" component={HotelsScreen}/>
        <Stack.Screen name="RegisterVehicle" component={VehicleRegister}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
