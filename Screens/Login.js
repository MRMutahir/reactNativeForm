import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <Image
                    style={{ width: '100%', height: 200 }} // Adjust the height as needed
                    source={{
                        uri: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
                    }}
                />
            </View>
            <View>
                <Image source={require('/assets/bg.jpg')} style={{ width: '100%', height: 200 }}/>
                <Text style={styles.wellcomeText}>WELCOME MR Education</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wellcomeText: {
        fontSize: 35,
    },
});

export default Login;
