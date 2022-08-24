import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { useRoute } from '@react-navigation/native';
const bg = "https://img.freepik.com/free-vector/blurred-background-with-light-colors_1034-245.jpg?w=2000"

const AnimatedImage = ({ uri = "",
    id = "",
    onView = () => { },
    onLike = () => { }, likes = 0, tags = "", title = "",
    onStop = () => { }
}) => {
    const width = new Animated.Value(Dimensions.get('window').width);
    const height = new Animated.Value(Dimensions.get('window').height);
    const paddingTop = new Animated.Value(Constants.statusBarHeight);
    const route = useRoute();
    console.log(route)
    useEffect(() => {
        Animated.timing(
            width, // The animated value to drive
            {
                toValue: Dimensions.get('window').width, // Animate to opacity: 1 (opaque)
                duration: 0, // Make it take a while
                useNativeDriver: false,

            },
        ).start(); // Starts the animation
        Animated.timing(
            paddingTop, // The animated value to drive
            {
                toValue: 250, // Animate to opacity: 1 (opaque)
                duration: 5000, // Make it take a while
                useNativeDriver: false,

            },
        ).start();
        Animated.timing(
            height, // The animated value to drive
            {
                toValue: Dimensions.get('window').height - 400, // Animate to opacity: 1 (opaque)
                duration: 5000, // Make it take a while
                useNativeDriver: false,
            },
        ).start(({ finished }) => {
            if (finished) {
                onStop(id)
            }
        }); // Starts the animation: ;
    }, [uri, route.name]);

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
                        marginTop: paddingTop
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
        paddingTop: Constants.statusBarHeight
    },
    logo: {
        width: 100,
        height: 100,
    },
    textStyle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
});
