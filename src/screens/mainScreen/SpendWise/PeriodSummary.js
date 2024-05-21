import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { s, vs, ms, mvs, ScaledSheet } from 'react-native-size-matters';

const PeriodSummary = ({ value, color, style }) => {
    // Calculate the percentage value
    const percentage = value / 1000000;
  
    // Determine the color for the progress based on the percentage
    const getProgressColor = (percentage) => {
      if (percentage) {
        return color; // Use the specified color for the completed progress
      } else {
        return '#626D84'; // Use gray for the remaining progress
      }
    };
  
    return (
      <View style={[styles.progressBar, style, { backgroundColor: '#626D84' }]}>
        <View style={[styles.progress, { height: `${percentage * 100}%`, backgroundColor: getProgressColor(percentage) }]} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    progressBar: {
      height: s(142),
      width: s(10),
      borderRadius: 5,
      overflow: 'hidden',
      position: "relative",
      alignSelf: "flex-end"
    },
    progress: {
      width: '100%',
      borderRadius: 5,
      position: "absolute",
      bottom: 0,
    },
  });



export default PeriodSummary;
