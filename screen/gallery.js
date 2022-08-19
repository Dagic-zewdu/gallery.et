import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AllContainer from '../components/containers/AllContainer';
import GalleryContainer from '../components/gallery';
import { fetchGalleriesAsync } from '../redux/actions/gallery/galleries';

const Gallery = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGalleriesAsync())
    }, [])
    const { gallery } = useSelector(state => state)
    const { loading, error } = gallery

    return (
        <AllContainer>
            <GalleryContainer />
        </AllContainer>
    );
}

const styles = StyleSheet.create({})

export default Gallery;
