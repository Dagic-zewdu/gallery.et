import React from 'react';
import { View, StyleSheet } from 'react-native';
import AllContainer from '../components/containers/AllContainer';

const Gallery = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGalleriesAsync())
    }, [])
    const { gallery } = useSelector(state => state)
    const { loading, error } = gallery

    return (
        <AllContainer>
        </AllContainer>
    );
}

const styles = StyleSheet.create({})

export default Gallery;
