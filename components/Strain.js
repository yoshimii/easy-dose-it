import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const Strain = props => {
    return (
    <TouchableNativeFeedback onLongPress={props.delete.bind(this, props.id)}>
      <View style={styles.strainName}>
        <Text>{props.name}</Text>
      </View>
  </TouchableNativeFeedback>
  );
};

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