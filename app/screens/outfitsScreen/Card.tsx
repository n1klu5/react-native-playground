import {Box} from 'native-base';
import React, {useRef} from 'react';
import {Animated, PanResponder} from 'react-native';
import {Dimensions} from 'react-native';
const AnimatedBox = Animated.createAnimatedComponent(Box);

export const {width, height} = Dimensions.get('window');

interface Props {
  position: Animated.AnimatedInterpolation<number>;
  onSwipe: () => void;
}

export const Card = ({position, onSwipe}: Props) => {
  const touchXY = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const scale = position.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const translateYOffset = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, {dx: touchXY.x, dy: touchXY.y}],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: () => {
        touchXY.extractOffset();
        Animated.spring(touchXY, {
          toValue: {x: 100, y: 0},
          useNativeDriver: true,
        }).start(() => {
          onSwipe();
        });
      },
    }),
  ).current;
  const bgColor = position.interpolate({
    inputRange: [0, 1],
    outputRange: ['#C9E9E7', '#74BCB8'],
  });

  return (
    <Box position="absolute" alignItems="center" justifyContent="center">
      <AnimatedBox
        width={0.7 * width}
        height={0.5 * height}
        borderRadius="xl"
        borderWidth={1}
        borderColor="black"
        style={{
          backgroundColor: bgColor,

          transform: [
            {
              translateY: Animated.add(touchXY.y, translateYOffset),
            },
            {
              translateX: touchXY.x,
            },
            {
              scale,
            },
          ],
        }}
        {...panResponder.panHandlers}
      />
    </Box>
  );
};
