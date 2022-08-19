import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from '../containers/grid';

const GalleryContainer = () => {
    const { galleries } = useSelector(state => state.gallery)
    const { data } = galleries

    return (
        <Container size={data.length}>
            <View style={{ flexDirection: "row" }}>
                {
                    data.slice(0, 2).map(({ _id, fileurl: uri }, index) => {
                        return (
                            <Col numRows={2} key={_id} >
                                <Image source={{ uri }} style={{ width: "98%", height: 200 }} />
                            </Col>
                        )
                    }
                    )
                }
            </View>
            <View style={{ flexDirection: "row" }}>
                {
                    data.slice(3, 5).map(({ _id, fileurl: uri }, index) => {
                        return (
                            <Col numRows={index === 0 ? 3 : 1} key={_id} >
                                <Image source={{ uri }} style={{ width: "98%", height: 200 }} />
                            </Col>
                        )
                    }
                    )
                }
            </View>
            <View style={{ flexDirection: "row" }}>
                {
                    data.slice(5, data.length).map(({ _id, fileurl: uri }, index) => {
                        return (
                            <Col numRows={2} key={_id} >
                                <Image source={{ uri }} style={{ width: "98%", height: 200 }} />
                            </Col>
                        )
                    }
                    )
                }
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({})

export default GalleryContainer;
