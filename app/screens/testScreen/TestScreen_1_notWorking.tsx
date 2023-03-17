import React, {useRef} from 'react';
import {
  SafeAreaView,
  Animated,
  Dimensions,
  View,
  StyleSheet,
} from 'react-native';

const {height} = Dimensions.get('window');

interface Card {
  name: string;
  color: string;
  price: string;
}

const CARD_HEIGHT = 250;
const CARD_TITLE_HEIGHT = 45;

const cards: Card[] = [
  {
    name: 'Shot',
    color: '#a9d0b6',
    price: '30 CHF',
  },
  {
    name: 'Juice',
    color: '#e9bbd1',
    price: '64 CHF',
  },
  {
    name: 'Mighty Juice',
    color: '#eba65c',
    price: '80 CHF',
  },
  {
    name: 'Sandwich',
    color: '#95c3e4',
    price: '85 CHF',
  },
  {
    name: 'Combi',
    color: '#1c1c1c',
    price: '145 CHF',
  },
  {
    name: 'Signature',
    color: '#a390bc',
    price: '92 CHF',
  },
  {
    name: 'Coffee',
    color: '#fef2a0',
    price: '47 CHF',
  },
];

export const TestScreen = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{flex: 1, margin: 16}}>
      <View style={{flex: 1}}>
        <View style={StyleSheet.absoluteFill}>
          {cards.map((card, i) => {
            const inputRange = [-CARD_HEIGHT, 0];
            const outputRange = [
              CARD_HEIGHT * i,
              (CARD_HEIGHT - CARD_TITLE_HEIGHT) * -i,
            ];
            const translateY = animatedValue.interpolate({
              inputRange,
              outputRange,
              extrapolateRight: 'clamp',
            });
            return (
              <Animated.View
                key={card.name}
                style={{transform: [{translateY}]}}>
                <View
                  style={{
                    backgroundColor: card.color,
                    borderRadius: 10,
                    height: CARD_HEIGHT,
                  }}
                />
              </Animated.View>
            );
          })}
        </View>
        <Animated.ScrollView
          scrollEventThrottle={1}
          contentContainerStyle={{height: height * 2}}
          showsVerticalScrollIndicator={true}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y: animatedValue},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />
      </View>
    </SafeAreaView>
  );
};
