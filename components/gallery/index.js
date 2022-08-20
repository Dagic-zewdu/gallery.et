import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Row, Col, FlatCol } from '../containers/grid';

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
                            <Col item={_id} numRows={index === 0 ? 3 : 1} key={_id} >
                                <Image source={{ uri }} style={{ width: "98%", height: 200 }} />
                            </Col>
                        )
                    }
                    )
                }
            </View>
            <FlatList
                data={data.slice(5, data.length)}
                numColumns={3}

                renderItem={({ item, index }) =>
                    <FlatCol key={index} item={item} onPress={(item) => console.log(item._id)}>
                        <Image source={{ uri: item.fileurl }} style={{ width: "100%", height: 200 }} />

                    </FlatCol>
                }
                keyExtractor={(item) => item._id}
            />
        </Container>
    );
}

const styles = StyleSheet.create({})

export default GalleryContainer;
