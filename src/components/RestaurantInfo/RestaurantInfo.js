/**
 * Created by Sahil on 8/30/18.
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import styles from './RestaurantInfoStyles';
import TagsHolder from "../TagsHolder";
import DotSeparator from '../DotSeparator';

const RestaurantInfoCardView = (props) => {
  return (
    <Card
      image={props.imgSrc}
      wrapperStyle={{ borderWidth: 0, borderColor: '#fff' }}
      containerStyle={{ borderWidth: 0, borderColor: '#fff' }}

    >
      <View style={[styles.primaryContainer, styles.marginSpacing]}>
        <Text style={styles.primaryContainerText}>{props.name}</Text>
      </View>
      <View style={[styles.secondaryContainer, styles.marginSpacing]}>
        <DotSeparator
          containerStyle={styles.dotContainerStyle}
          dotElementStyle={styles.dotElementStyle}
          data={[props.priceRank, ...props.tags]}
        />
      </View>
      <View style={[styles.tags, styles.marginSpacing]}>
        <TagsHolder containerStyle={styles.tagContainer}>
          <Text>
            {props.minDeliveryTime} - {props.maxDeliveryTime} MINS
          </Text>
          </TagsHolder>
        <TagsHolder containerStyle={styles.tagContainer}>
          <Text>{props.avgReview} * ({props.reviewCount})</Text>
        </TagsHolder>
      </View>
      <View style={styles.additionalInfo}>

      </View>
    </Card>
  )
};

RestaurantInfoCardView.defaultProps = {
  border: false,
}

export const RestaurantInfoCardViewBorder = props => <RestaurantInfoCardView {...props} border />;

export default RestaurantInfoCardView;