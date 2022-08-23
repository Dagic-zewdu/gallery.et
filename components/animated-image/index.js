import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
const AnimatedImage = ({ uri,
    onView = () => { },
}) => {
    const width = new Animated.Value(360);
    const height = new Animated.Value(600);
    useEffect(() => {
        Animated.timing(
            width, // The animated value to drive
            {
                toValue: 360, // Animate to opacity: 1 (opaque)
                duration: 450, // Make it take a while
                useNativeDriver: false,
            },
        ).start(); // Starts the animation
        Animated.timing(
            height, // The animated value to drive
            {
                toValue: 750, // Animate to opacity: 1 (opaque)
                duration: 10000, // Make it take a while
                useNativeDriver: false,
            },
        ).start(); // Starts the animation
    }, []);

    return (
        <View style={styles.container}
        >
            <Animated.Image
                source={{ uri }}
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                }}
            />
            <View style={styles.logoContainer}>
                <Text style={styles.textStyle}>
                    {title}
                </Text>
                <Text>{tags}</Text>
                <View style={styles.flex}>
                    <Text>{likes} likes </Text>
                    <View>
                        <Toachable
                        <AntDesign name="hearto" size={24} color="red" />
                        {" "}

                        <AntDesign name="eyeo" size={24} color="black" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AnimatedImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#2F7ECC',
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "between"
    },
    logoContainer: {
        flex: 1,
        alignItems: "flex-end",
        paddingTop: 48,
        backgroundColor: 'rgba(11, 56, 82, 0.3)',
    },
    logo: {
        width: 100,
        height: 100,
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});
