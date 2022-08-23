import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AnimatedImage from '../animated-image';

const HomeContainer = (props) => {
    console.log(props)
    const { galleries } = useSelector(state => state.gallery)
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const { data } = galleries
    useEffect(() => {
        setImages(data?.map(({ fileurl }) => fileurl))
    }, [data])

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(Math.floor(Math.random() * data.length))
        }, 3000)
        return () => clearInterval(interval)
    }, [])
    console.log(index)
    return (
        <AnimatedImage uri={images[index]} />
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
