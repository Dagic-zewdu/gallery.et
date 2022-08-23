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
        setImages(data?.map(({ fileurl }) => fileurl))
    }, [data])
    useEffect(() => {
        setImage(data.find(i => i.fileurl === image[index]))
    }, [index, image])
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(Math.floor(Math.random() * data.length))
        }, 3000)
        return () => clearInterval(interval)
    }, [])
    console.log(index, image)
    return (
        <AnimatedImage uri={images[index]} title={image?.title} />
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
