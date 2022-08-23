import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const HomeContainer = () => {
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
    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
