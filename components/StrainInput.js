import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import Strain from './Strain.js'

const StrainInput = props => {
    const [strain, setStrain] = useState('')

    const handleStrain = enteredStrain => {
        setStrain(enteredStrain)
      }
    
      const addStrainHandler = _=> {
          props.onAddStrain(strain);
          setStrain('');
      }

    return <>
    <Modal visible={props.visible} animationType="slide">
        <View style={
            styles.inputContainer
        }>
            <TextInput placeholder="strain name" onChangeText={handleStrain} value={strain}
                style={
                    styles.strainInput
                }/>
            <Button title='cancel' color="red" onPress={props.onCancel} />
            <Button color={
                    styles.button.color
                }
                title="add"
                onPress={addStrainHandler}
                />
        </View>
    </Modal>
      </>
}

const styles = StyleSheet.create({
    strainInput: {

        width: '80%',
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingBottom: 10, 
        marginBottom: 10

    },
    inputContainer: {
        flexDirection: 'column', //column is default flex direction in React Native
        flex:1,//how much space flex items take, if only item 1 means the entire space, otherwise it will take the default space which is only the size of the items
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: '#017C6B'
    },
})


export default StrainInput;
