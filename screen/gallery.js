import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AllContainer from '../components/containers/AllContainer';
import GalleryContainer from '../components/gallery';
import GalleriesSkeleton from '../components/skeleton/Gallery/galleries';
import { fetchGalleriesAsync } from '../redux/actions/gallery/galleries';
import { Donothing } from '../utils';

const Gallery = () => {
    const dispatch = useDispatch()

    const { galleries } = useSelector(state => state.gallery)
    const { loading, error, page, loadMore: loadmore } = galleries

    useEffect(() => {
        dispatch(fetchGalleriesAsync(page))
    }, [])
    const loadMore = () => loadmore ? dispatch(fetchGalleriesAsync(page)) : Donothing()
    return (
        <AllContainer title="Images" onScrollEnd={() => loadMore()}>
            <GalleryContainer />
        </AllContainer>
    );
}

const styles = StyleSheet.create({})

export default Gallery;
