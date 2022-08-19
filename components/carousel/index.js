import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const CustomCarousel = ({ data, onSnapToItem = () => { }, children }) => {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={onSnapToItem}
                renderItem={({ index }) => (children)}
            />
        </View>
    );
}


export default CustomCarousel;
