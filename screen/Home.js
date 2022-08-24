import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import AllContainer from '../components/containers/AllContainer';
import HomeContainer from '../components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGalleriesAsync } from '../redux/actions/gallery/galleries';

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGalleriesAsync())
  }, [])

  const { gallery } = useSelector(state => state)
  const { loading, error } = gallery
  return (
    <AllContainer header={false}>
      <HomeContainer />
    </AllContainer>
  );
}

const styles = StyleSheet.create({})

export default Home;
