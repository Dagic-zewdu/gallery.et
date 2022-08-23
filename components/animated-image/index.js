import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const bg = "https://img.freepik.com/free-vector/blurred-background-with-light-colors_1034-245.jpg?w=2000"

const AnimatedImage = ({ uri = "",
    onView = () => { },
    onLike = () => { }, likes = 0, tags = "", title = "" }) => {
    const width = new Animated.Value(Dimensions.get('window').width);
    const height = new Animated.Value(Dimensions.get('window').height);
    useEffect(() => {
        Animated.timing(
            width, // The animated value to drive
            {
                toValue: Dimensions.get('window').width, // Animate to opacity: 1 (opaque)
                duration: 450, // Make it take a while
                useNativeDriver: false,
            },
        ).start(); // Starts the animation
        Animated.timing(
            height, // The animated value to drive
            {
                toValue: Dimensions.get('window').height + 200, // Animate to opacity: 1 (opaque)
                duration: 10000, // Make it take a while
                useNativeDriver: false,
            },
        ).start(); // Starts the animation
    }, [uri]);

    return (
        <ImageBackground source={{ uri: bg }} style={styles.container}
        >{
                uri &&

                <Animated.Image
                    source={{ uri }}
                    style={{
                        width: width,
                        height: height,
                        position: 'absolute',
                    }}
                />
            }
            <View style={styles.logoContainer}>
                <Text style={styles.textStyle}>
                    {title}
                </Text>
                <Text>{tags}</Text>
                <View style={styles.flex}>
                    <Text>{likes} likes </Text>
                    <View style={styles.flex}>
                        <TouchableOpacity onPress={onLike}>
                            <AntDesign name="hearto" size={24} color="red" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onView}>
                            <AntDesign name="eyeo" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default AnimatedImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#2F7ECC',
        height: Dimensions.get('window').height,
    },
    flex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
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
