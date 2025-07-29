import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles.ts';

const DividerWithText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Or</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

export default DividerWithText;
