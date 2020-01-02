import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Strain = props => {
    return <View style={styles.strainName}>
    <Text>{props.name}</Text>
  </View>
}

const styles = StyleSheet.create({
    strainName: {
        padding: 20, 
        marginVertical: 1,
        width: '100%',
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 1
      }
})

export default Strain;