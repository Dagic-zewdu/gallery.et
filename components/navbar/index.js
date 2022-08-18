import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Constants from 'expo-constants'
const Header = ({title="Gallery.et"}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.logo} >{title}</Text>
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
       paddingTop: Constants.statusBarHeight,
       paddingBottom: 10
    },
    logo :{
       fontSize: 30, 
       fontWeight:"bold"
    }
})

export default Header;
