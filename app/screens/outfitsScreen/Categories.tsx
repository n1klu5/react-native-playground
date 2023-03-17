import {ScrollView} from 'native-base';
import React from 'react';
import {Category} from './Category';

const categories = [
  {
    id: 'newin',
    label: 'New in',
    color: '#FFE8E9',
  },
  {
    id: 'summer',
    label: 'Summer',
    color: '#BEECC4',
  },
  {
    id: 'activewear',
    label: 'Active wear',
    color: '#BFEAF5',
  },
  {
    id: 'outlet',
    label: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accesories',
    label: 'Accesories',
    color: '#FFE8E9',
  },
];

export const Categories = () => {
  return (
    <ScrollView
      position="absolute"
      top={0}
      mx={2}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{flexGrow: 0}}>
      {categories.map(category => (
        <Category
          key={category.id}
          label={category.label}
          color={category.color}
        />
      ))}
    </ScrollView>
  );
};
