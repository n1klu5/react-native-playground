import {Box, Pressable, Text, VStack} from 'native-base';
import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';
const AnimatedBox = Animated.createAnimatedComponent(Box);

interface Props {
  label: string;
  color: string;
}

export const Category = ({label, color}: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const size = useRef(new Animated.Value(16)).current;

  const scale = size.interpolate({
    inputRange: [16, 18],
    outputRange: [1, 1.25],
  });
  const opacity = size.interpolate({
    inputRange: [16, 18],
    outputRange: [1, 0.5],
  });

  return (
    <Pressable
      onPressIn={() => {
        Animated.timing(size, {
          toValue: 18,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }}
      onPressOut={() => {
        Animated.timing(size, {
          toValue: 16,
          duration: 100,
          useNativeDriver: true,
        }).start();
        setIsSelected(prev => !prev);
      }}>
      <VStack
        alignItems="center"
        justifyContent="center"
        space={2}
        mr={2}
        p={2}>
        <AnimatedBox
          rounded="full"
          bg={color}
          w={size}
          h={size}
          style={{
            opacity,
            transform: [{scale}],
          }}
          shadow={isSelected ? 8 : undefined}
        />
        <Text>{label}</Text>
      </VStack>
    </Pressable>
  );
};
