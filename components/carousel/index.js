import React from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const CustomCarousel = ({children,data}) => {
    return (
         <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (children)}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default CustomCarousel;
