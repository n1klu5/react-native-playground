import React from 'react';
import {Box} from 'native-base';
import {Animated} from 'react-native';

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface Props {
  index: number;
  selectedIndex: Animated.AnimatedDivision<number>;
}

export const Dot = ({index, selectedIndex}: Props) => {
  const opacity = selectedIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });
  const scale = selectedIndex.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: 'clamp',
  });
  return (
    <AnimatedBox
      mr="4"
      w={2}
      h={2}
      bg="teal.600"
      rounded={50}
      style={{
        opacity,
        transform: [{scale}],
      }}
    />
  );
};
