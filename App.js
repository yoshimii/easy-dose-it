import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import StrainInput from './components/StrainInput.js';
import Strain from './components/Strain.js';
export default function App() {
    
    const [strains, setStrains] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addStrainHandler = strainName => {
      setStrains(currentStrains => [
        ...currentStrains,
         { key: Date.now().toString(), value: strainName }
        ]);
        setIsAddMode(false);//will not rerender comoponents after each state set, will batch change the state changes in one rerender, this is good
    }

    const deleteStrainHandler = strainId => {
        setStrains(currentStrains => {
            return currentStrains.filter( s => {
                s.id !== strainId
            });
        })
    }

    const cancelAddStrain = _=> {
        setIsAddMode(false);
    }
    return (
        <View style={
            styles.screen
        }>
            <Button title="Add new strain" onPress={() => setIsAddMode(true)} />
          <StrainInput visible={isAddMode} onAddStrain={addStrainHandler} onCancel={cancelAddStrain} />
          <FlatList data={strains}
          renderItem={sData => (
          <Strain 
            name={sData.item.value}
            delete={deleteStrainHandler}
            id={sData.item.id}
            />
        )} style={{ marginVertical: 10}}/>                  
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },

});
