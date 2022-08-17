import React from 'react';
import {View, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const RightNav = () => {
    return (
        <View style={styles.navbar}>
          <AntDesign name="hearto" size={24} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar:{
        justifyContent:"space-between"
    }
})

export default RightNav;
