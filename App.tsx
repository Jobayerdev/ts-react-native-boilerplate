import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import {tailwind} from './tailwind';

const App = () => {
  return (
    <View>
      <Text style={tailwind('bg-green-500')}>Hello</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
