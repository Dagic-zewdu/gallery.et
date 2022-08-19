import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';

const HomeContainer = () => {
    const { galleries } = useSelector(state => state.gallery)

    const width = Dimensions.get('window').width;
    const [images, setImages] = useState([])
    const { data } = galleries
    useEffect(() => {
        setImages(data?.map(({ fileurl }) => fileurl))
    }, [data])
    console.log(images)
    return (
        <View>
            {
                <Carousel
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={true}
                    data={[...new Array(6).keys()]}
                    panGestureHandlerProps={{
                        activeOffsetX: [-10, 10],
                    }}
                    scrollAnimationDuration={1000}
                    renderItem={({ index }) => (
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                borderWidth: 0.1,
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={{ uri: images[index + 3] }}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
