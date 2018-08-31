/**
 * Created by Sahil on 8/31/18.
 */

import React from 'react';
import {View, FlatList} from 'react-native';

import restaurantData from './dummyRestaurantData';
import RestaurantInfoCardView from "./RestaurantInfo";

class RestaurantInfoContainer extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.restaurantData}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <RestaurantInfoCardView key={item.id} {...item} />}
        />
      </View>
    )
  }
};


RestaurantInfoContainer.defaultProps = {
  restaurantData,
};

export default RestaurantInfoContainer;