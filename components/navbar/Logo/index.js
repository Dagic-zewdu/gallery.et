import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Logo = () => {
    return (
   <Text style={styles.logo} >Gallery.et</Text>
    );
}

const styles = StyleSheet.create({
    logo :{
       fontSize: 30, 
       fontStyle: "italic",
       color: "white"
    }
})

export default Logo;
