import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CircleIcon, HamburgerIcon, IconButton, VStack, Box} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {Background} from '../../components/background/Background';
import {Card} from './Card';
import {Header} from '../../components/header/Header';
import {HomeStackParamList} from '../../navigators';
import {Categories} from './Categories';

const cards = [
  {
    index: 3,
  },
  {
    index: 2,
  },
  {
    index: 1,
  },
  {
    index: 0,
  },
];
const step = 1 / (cards.length - 1);

export const OutfitsScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<HomeStackParamList>;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedIndex = useRef(new Animated.Value(currentIndex)).current;

  useEffect(() => {
    Animated.spring(animatedIndex, {
      toValue: currentIndex,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <VStack bg="white" w="100%" h="100%">
      <Header
        left={
          <IconButton
            key="o1"
            variant="ghost"
            icon={<HamburgerIcon color="black" key="o1-icon" />}
            size="sm"
            onPress={() => navigation.openDrawer()}
          />
        }
        title="Outfits Ideas"
        right={
          <IconButton
            key="o2"
            variant="ghost"
            icon={<CircleIcon color="black" key="o2-icon" />}
            size="sm"
            onPress={() => true}
          />
        }
      />
      <Box flex={1} alignItems="center" justifyContent="center">
        <Background />
        <Categories />
        {cards.map(({index}) =>
          currentIndex < index * step + step ? (
            <Card
              key={index}
              position={Animated.subtract(index * step, animatedIndex)}
              onSwipe={() => setCurrentIndex(prev => prev + step)}
            />
          ) : null,
        )}
      </Box>
    </VStack>
  );
};
