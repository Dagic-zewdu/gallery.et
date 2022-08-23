import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
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
        console.log(id)
        if (data.length) {
            if (data.length === index) {
                return setIndex(0)
            }
            return setIndex(s => (s + 1))
        }
    }
    useEffect(() => {
        if (data.length)
            setImage(s => (data[index]))
    }, [index, data])

    return (
        <AnimatedImage uri={image?.fileurl}
            tags={image?.tags?.join(",")}
            onStop={(id) => changeImage(id)}
            title={image?.title} id={image?._id} />
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
