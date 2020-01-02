import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import StrainInput from './components/StrainInput.js';
import Strain from './components/Strain.js';
export default function App() {
    
    const [strains, setStrains] = useState([])

    const addStrainHandler = strainName => {
      setStrains(currentStrains => [
        ...currentStrains,
         { key: Date.now().toString(), value: strainName }
        ])
    }
    return (
        <View style={
            styles.screen
        }>
          <StrainInput onAddStrain={addStrainHandler} />
          <FlatList data={strains}
          renderItem={sData => (
          <Strain name={sData.item.value} />
        )} style={{ marginVertical: 10}}/>                  
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },

});
