/**
 * Created by Sahil on 8/31/18.
 */

import React from 'react';
import { View } from 'react-native';
import Carousel from "react-native-snap-carousel";
import RecommendationItem from "../../components/RecommendationItem";
import dummyRecommendations from './dummyRecommendations';

class RecommendationContainer extends React.Component {
  render() {
    return (
      <View>
        <Carousel
          data={dummyRecommendations}
          renderItem={({ item }) => <RecommendationItem {...item} />}
        />
      </View>
    );
  }
};

export default RecommendationContainer;