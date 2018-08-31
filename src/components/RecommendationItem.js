/**
 * Created by Sahil on 8/31/18.
 */

import React from 'react';
import { View, Image} from 'react-native';

const dummyImageGenerationUrl = 'http://lorempixel.com/640/480/food';

const RecommendationItem = props => {
  return (
    <View>
      <View style={styles.image}>
        <Image
          source={{ uri: dummyImageGenerationUrl }}
        />
      </View>
      <View>
        <Text> Hello world</Text>
        <Text> Hello world text</Text>
      </View>

    </View>
  )
};

const styles = Stylesheet.create({
  imageContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },
})

export default RecommendationItem;