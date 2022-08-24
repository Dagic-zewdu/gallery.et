import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { event } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { handleScrollUpdown } from '../../utils';
import AnimatedImage from '../animated-image';

const HomeContainer = (props) => {
    const { galleries } = useSelector(state => state.gallery)
    const { data } = galleries
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(data[0])

    useEffect(() => {
        setImages(data?.slice(3, data.length).map(({ fileurl }) => fileurl))
    }, [data])
    const changeImage = (id) => {
        if (data.length) {
            if (data.length === index) {
                return setIndex(0)
            }
            return setIndex(s => (s + 1))
        }
    }
    const changeToPrev = () => {
        if (index) {
            return setIndex(data.length - 1)
        }
        return setIndex(index - 1)
    }
    const changeToNext = () => {
        if (index === data.length) {
            return setIndex(0)
        }
        return setIndex(index + 1)
    }
    useEffect(() => {
        if (data.length)
            setImage(s => (data[index]))
    }, [index, data])
    const scrollYRef = useRef(0)

    return (
        <ScrollView nestedScrollEnabled
            onScroll={event => {
                const currentYPosition = event.nativeEvent.contentOffset.y
                const oldPosition = scrollYRef.current

                if (oldPosition < currentYPosition) {
                    // we scrolled down
                    changeToNext()
                } else {
                    // we scrolled up
                    changeToPrev()
                }
                scrollYRef.current = currentYPosition
            }}

        >
            <AnimatedImage uri={image?.fileurl}
                tags={image?.tags?.join(",")}
                onStop={(id) => changeImage(id)}
                title={image?.title} id={image?._id} />
        </ScrollView >
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
