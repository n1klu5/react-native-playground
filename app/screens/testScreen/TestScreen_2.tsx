import {Box, PlayIcon, WarningIcon, SunIcon} from 'native-base';
import React, {useRef} from 'react';
import {Animated, SafeAreaView, StyleSheet} from 'react-native';
const AnimatedBox = Animated.createAnimatedComponent(Box);

const TABBAR_HEIGHT = 45;
const TAB_WIDTH = 70;
const TABBAR_WIDTH = TAB_WIDTH * 3;

export const TestScreen = () => {
  const x = useRef(new Animated.Value(0)).current;
  const translateX = x.interpolate({
    inputRange: [0, TABBAR_WIDTH],
    outputRange: [TABBAR_WIDTH - TAB_WIDTH, 0],
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 16,
        alignItems: 'center',
        backgroundColor: '#212223',
      }}>
      <Box flex={1} width={TABBAR_WIDTH} height={TABBAR_HEIGHT}>
        <TabBar color="#f8f9fa" bgColor="#828384" borderColor="#505152" />
        <AnimatedBox
          width={TAB_WIDTH}
          height={TABBAR_HEIGHT}
          style={{transform: [{translateX}]}}
          overflow="hidden"
          position="absolute"
          borderColor="gray.400"
          borderWidth={1}
          borderRadius="lg">
          <TabBar color="#3b4043" bgColor="#f8f9fa" borderColor="#f8f9fa" />
        </AnimatedBox>
        <Animated.ScrollView
          horizontal
          style={StyleSheet.absoluteFill}
          scrollEventThrottle={16}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {
            useNativeDriver: true,
          })}
          bounces={false}
          snapToInterval={TAB_WIDTH + TAB_WIDTH / 2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{width: TABBAR_WIDTH * 2}}
        />
      </Box>
    </SafeAreaView>
  );
};

interface TabBarProps {
  color: string;
  bgColor: string;
  borderColor: string;
}
const TabBar = ({color, bgColor, borderColor}: TabBarProps) => {
  return (
    <Box flexDirection="row" justifyContent="center" h={TABBAR_HEIGHT}>
      <Box
        bg={bgColor}
        borderWidth={1}
        borderTopLeftRadius="lg"
        borderBottomLeftRadius="lg"
        borderColor={borderColor}
        px={4}
        justifyContent="center">
        <WarningIcon size={35} color={color} />
      </Box>
      <Box
        bg={bgColor}
        borderWidth={1}
        borderColor={borderColor}
        px={4}
        justifyContent="center">
        <PlayIcon size={35} color={color} />
      </Box>
      <Box
        bg={bgColor}
        borderWidth={1}
        borderColor={borderColor}
        borderTopRightRadius="lg"
        borderBottomRightRadius="lg"
        px={4}
        justifyContent="center">
        <SunIcon size={35} color={color} />
      </Box>
    </Box>
  );
};
