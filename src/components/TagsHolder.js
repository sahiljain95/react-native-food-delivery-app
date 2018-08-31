/**
 * Created by Sahil on 8/31/18.
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

const TagsHolder = props => {
  return (
    <View style={[styles.tagsHolder, props.containerStyle]} >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsHolder: {
    backgroundColor: '#eee',
  },
});

export default TagsHolder;
