import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({required,dataDetectorTypes,placeholder,keyboardType, onChangeText, autoCapitalize,multiline}) => {
    return <TextInput 
    placeholder={placeholder}
    dataDetectorTypes={dataDetectorTypes} 
    onChangeText={onChangeText} 
    autoCapitalize={autoCapitalize}
    multiline={multiline}
    required={required}
    keyboardType={keyboardType}
    style={styles.input}
    />
    
};
export default Input;

const styles = StyleSheet.create({
    input:{
        borderBottomWidth: 0.2,
        marginTop: 40
        
    }
})