import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { FlatCol } from '../../containers/grid';

const GalleriesSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                numColumns={3}

                renderItem={({ item, index }) =>
                    <FlatCol key={index} item={item} onPress={() => { }}>
                        <SkeletonPlaceholder.Item
                            style={{ width: "100%", height: 200, borderRadius: 10 }} />

                    </FlatCol>
                }
                keyExtractor={(item) => item}
            />
        </SkeletonPlaceholder>

    );
}

const styles = StyleSheet.create({})

export default GalleriesSkeleton;
