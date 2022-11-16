
import React from 'react';

import { StyleSheet, Text as RNText } from 'react-native';
export default function Text({children, style}){
    const textStyle = StyleSheet.compose(style)
    return (
      <RNText style={textStyle}>
            {children}
      </RNText>
    )
};