import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IFProps {
  children: ReactNode;
  style: any;
}
const BoxStyle: React.FC<IFProps> = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default BoxStyle;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
