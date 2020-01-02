import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    const [strain, setStrain] = useState('')
    const [strains, setStrains] = useState([])
    
    const handleStrain = enteredStrain => {
      setStrain(enteredStrain)
    }

    const addStrainHandler = e => {
      setStrains(currentStrains => [...currentStrains, strain])
    }
    return (
        <View style={
            styles.screen
        }>
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
                    onPress={addStrainHandler}
                    />
            </View>
            <View>
                  {strains.map(s => <Text>{s}</Text>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
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
    }
});
