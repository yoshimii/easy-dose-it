import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    const [output, setOutput] = useState('EasyDoseIt')
    return (
        <View style={
            styles.screen
        }>
            <View style={
              styles.inputContainer
            }>
                <TextInput placeholder="strain name"
                    style={
                        styles.strainInput
                    }/>
                <Button color={
                        styles.button.color
                    }
                    title="add"/>
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
