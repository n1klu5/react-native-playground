import {useRef} from 'react';
import {Animated, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';

export const useScrollHandler = () => {
  const scrollXPosition = useRef(new Animated.Value(0)).current;

  const onScrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.timing(scrollXPosition, {
      toValue: event.nativeEvent.contentOffset.x,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return {scrollXPosition, onScrollHandler};
};
