import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Strain from './Strain.js'

const StrainInput = props => {
    const [strain, setStrain] = useState('')

    const handleStrain = enteredStrain => {
        setStrain(enteredStrain)
      }

    return <>
    <View style={
        styles.inputContainer
      }>
          <TextInput placeholder="strain name" onChangeText={handleStrain} value={strain}
              style={
                  styles.strainInput
              }/>
          <Button color={
                  styles.button.color
              }
              title="add"
              onPress={props.onAddStrain.bind(this, strain)}
              />
      </View>

      </>
}

const styles = StyleSheet.create({
    strainInput: {

        width: '80%',
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingBottom: 10

    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        color: '#017C6B'
    },
})


export default StrainInput;
