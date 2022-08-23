import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const HomeContainer = () => {
    const { galleries } = useSelector(state => state.gallery)
    const { data } = galleries
    useEffect(() => {
        setImages(data?.map(({ fileurl }) => fileurl))
    }, [data])
    useEffect(() => {
        setInterval(() =>)
    }, [])
    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({})

export default HomeContainer;
