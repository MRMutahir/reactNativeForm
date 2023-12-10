import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/Login';
import SignUpScreen from './Screens/Signup';
import CustomSplashScreen from './Screens/CustomSplashScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [splashFinished, setSplashFinished] = useState(false);

  useEffect(() => {
    // Simulate a delay for the splash screen
    const splashTimer = setTimeout(() => {
      setSplashFinished(true);
    }, 2000); // Adjust the time as needed

    // Clear the timer when the component is unmounted
    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={splashFinished ? 'Login' : 'CustomSplashScreen'}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CustomSplash" component={CustomSplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
