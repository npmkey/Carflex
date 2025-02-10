import React from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';

const Search = () => {
  return (
    <View style={styles.inputbutton}>
        <Image style={styles.space} source={require('../assets/search-normal.png')}></Image>
        <TextInput
        placeholder='pesquise aqui'
        >
        </TextInput>
    </View>
  )};

const styles = StyleSheet.create({
    inputbutton: {
    height: 54,
    width: 330,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C3D4E9',
    flex: 1,
    flexDirection: 'row',
    },
    space:{
        marginRight: 10,
    },
});
export default Search;