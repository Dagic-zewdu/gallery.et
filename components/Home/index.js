import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AnimatedImage from '../animated-image';

const HomeContainer = (props) => {
    const { galleries } = useSelector(state => state.gallery)
    const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState({})
    const { data } = galleries
    useEffect(() => {
        setImages(data?.slice(3, data.length).map(({ fileurl }) => fileurl))
    }, [data])

    useEffect(() => {
        if (data.length) {
            setInterval(() => {
                setIndex(Math.floor(Math.random() * data.length))
            }, 10000)
        }
    }, [data])
    return (
        <AnimatedImage uri={images[index]} title={image?.title} />
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
