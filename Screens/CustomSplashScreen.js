// CustomSplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomSplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate some loading time, then navigate to your main screen
    const timer = setTimeout(() => {
      navigation.replace('MainScreen'); // Replace with the name of your main screen
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Your custom splash screen content */}
      <Image source={{ uri: "https://invent.trips.pk/ckfinder/userfiles/images/worldwide%20tour.jpg" }} style={styles.image} />
      <Text style={styles.text}>Your App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Set background color as needed
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default CustomSplashScreen;