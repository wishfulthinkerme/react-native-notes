import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import List from './containers/List';

export default () => (
  <View style={styles.container}>
    <List />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f9fd',
    height: '100%',
    flex: 1,
    padding: 20,
  },
});
