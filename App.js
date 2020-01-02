import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
    const [output, setOutput] = useState('EasyDoseIt')
    return (
        <View style={
            styles.container
        }>
            <View style={
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }
            }>
                <TextInput placeholder="strain name"
                    style={
                        {
                            width: '80%',
                            borderBottomColor: "black",
                            borderBottomWidth: 1,
                            paddingBottom: 10
                        }
                    }/>
                <Button color={styles.button.color} title="add"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    button: {
        color: '#017C6B'
    }
});
