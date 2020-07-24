import React from 'react';
import {View, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Container = ({children, backgroundColor, style = {}}) => {
  const containerStyles = [[styles.container, style]];
  if (backgroundColor) {
    containerStyles.push({backgroundColor});
  }
  return (
    <View style={containerStyles}>
      <StatusBar
        backgroundColor={EStyleSheet.value('$black')}
        barStyle="light-content"
      />
      {children}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: '$white',
    flex: 1,
  },
});

export default Container;
