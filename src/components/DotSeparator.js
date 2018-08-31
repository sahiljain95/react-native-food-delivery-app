/**
 * Created by Sahil on 8/31/18.
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';

const DotSeparator = props => {
  const dataLength = _.castArray(props.data).length;
  return (
    <View style={props.containerStyle}>
      {_.map(props.data, (dataItem, index) => [
            <View style={props.dotElementStyle}>
              <Text>{dataItem}</Text>
            </View>,
            <View style={[ props.dotElementStyle, (index !== dataLength - 1) && styles.dot]} />,
        ])
      }
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: '#ddd',
  }
});

export default DotSeparator;