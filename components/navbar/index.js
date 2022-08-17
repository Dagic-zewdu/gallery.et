import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Constants from 'expo-constants'
const Header = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.logo} >Gallery.et</Text>
          <AntDesign name="hearto" size={24} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar :{
       paddingHorizontal: 10,
       flexDirection: "row",
       alignItems: "center",
       borderBottomColor:"#ddd",
       justifyContent:"space-between",
       padding: Constants.statusBarHeight
    },
    logo :{
       fontSize: 30, 
       fontStyle: "italic",
    }
})

export default Header;
