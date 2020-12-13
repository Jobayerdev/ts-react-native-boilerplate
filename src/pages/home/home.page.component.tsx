import {StyleSheet, Text, View} from 'react-native';

import BoxStyle from '../../components/common/box-style/box.style.component';
import React from 'react';

const HomePage = () => {
  return (
    <BoxStyle style={styles.container}>
      <Text>Most Recent</Text>
    </BoxStyle>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B0A1D',
    flex: 1,
  },
});
