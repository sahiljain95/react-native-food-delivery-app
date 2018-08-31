/**
 * Created by Sahil on 8/31/18.
 */

import uuid from 'uuid';
import Images from '../../assets/images';

export default [
  {
    id: uuid.v4(),
    name: 'Wat A Burger - Baani Square',
    imgSrc: Images.res1,
    minDeliveryTime: 25,
    maxDeliveryTime: 35,
    priceRank: 1,
    tags: ['Indian', 'Chinese', 'Italian'],
    avgReview: 3.8,
    reviewCount: 300,
    additional: ['Grab discount of 15% on order above 150. Hurry up!']
  },
  {
    id: uuid.v4(),
    name: 'Southern Junction',
    imgSrc: Images.res2,
    minDeliveryTime: 30,
    maxDeliveryTime: 35,
    priceRank: 2,
    avgReview: 4.1,
    reviewCount: 250,
    tags: ['Indian', 'Chinese', 'Italian'],
    additional: ['Grab discount of 15% on order above 150. Hurry up!']
  },
  {
    id: uuid.v4(),
    name: 'Best in Burgers - Sector 49',
    imgSrc: Images.res3,
    minDeliveryTime: 50,
    maxDeliveryTime: 55,
    priceRank: 4,
    avgReview: 4.6,
    reviewCount: 10,
    tags: ['Indian', 'Vegan'],
  },
  {
    id: uuid.v4(),
    name: '3H Kitchen - South City II',
    imgSrc: Images.res1,
    minDeliveryTime: 25,
    maxDeliveryTime: 35,
    priceRank: 1,
    tags: ['Indian', 'Chinese', 'Italian'],
    avgReview: 3.8,
    reviewCount: 300,
    additional: ['Grab discount of 15% on order above 150. Hurry up!']
  },
  {
    id: uuid.v4(),
    name: 'Burger Express - Sector 10',
    imgSrc: Images.res2,
    minDeliveryTime: 30,
    maxDeliveryTime: 35,
    priceRank: 2,
    avgReview: 4.1,
    reviewCount: 250,
    tags: ['Indian', 'Chinese', 'Italian'],
    additional: ['Grab discount of 15% on order above 150. Hurry up!']
  },
  {
    id: uuid.v4(),
    name: 'The Wok Chef - Chinese cuisine',
    imgSrc: Images.res3,
    minDeliveryTime: 50,
    maxDeliveryTime: 55,
    priceRank: 4,
    avgReview: 4.6,
    reviewCount: 10,
    tags: ['Indian', 'Vegan'],
  },
];