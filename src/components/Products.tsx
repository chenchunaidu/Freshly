import {FlatList} from 'native-base';
import React from 'react';

import Product from './Product';

export default function Products() {
  const products = [
    {
      name: 'Fresh Guava 1kg',
      price: 35,
      id: 1,
      description:
        'Guava from local farms will be delivered directly to your home.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guava_ID.jpg/440px-Guava_ID.jpg',
    },
    {
      name: 'Fresh Guava 10kg box',
      id: 2,
      price: 300,
      description:
        'Guava from local farms will be delivered directly to your home',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guava_ID.jpg/440px-Guava_ID.jpg',
    },
    {
      name: 'Fresh Guava 25kg box',
      id: 3,
      price: 500,
      description:
        'Guava from local farms will be delivered directly to your home',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guava_ID.jpg/440px-Guava_ID.jpg',
    },
  ];
  return (
    <FlatList
      marginBottom={32}
      data={products}
      renderItem={({item}) => <Product {...item} />}
      keyExtractor={item => item.name}
    />
  );
}
