import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';

const CategoryProgress = ({ value, color }) => {
 // Calculate the percentage value
 const percentage = value / 100;

 const getProgressColor = (percentage) => {
    if (percentage) {
      return color;
    } 
    else {
      return '#CCCCCC';
    }
  };

 return (
   <View style={[styles.progressBar, { backgroundColor: '#CCCCCC' }]}>
     <View style={[styles.progress, { width: `${percentage * 100}%`, backgroundColor: getProgressColor(percentage) }]} />
   </View>
 );
};

const styles = StyleSheet.create({
 progressBar: {
   height: s(8),
   width: s(150),
   borderRadius: 5,
   overflow: 'hidden',
 },
 progress: {
   height: '100%',
   borderRadius: 5,
 },
});



export default CategoryProgress;
