import {Box, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const {width: wWidth} = Dimensions.get('window');
const aspectRatio = 195 / 405;

interface Point {
  date: string;
  value: number;
}

interface Props {
  data: Point[];
}

const lerp = (min: number, max: number, value: number) => {
  return (1 - value) * min + value * max;
};

export const GRAPH_COLORS = [
  'teal',
  'yellow',
  'orange',
  'blue',
  'violet',
  'darkBlue',
];
const formatter = Intl.DateTimeFormat('en', {month: 'short'});

export const Graph = ({data}: Props) => {
  const values = data.map(d => d.value);
  const dates = data.map(d => d.date);
  const canvasWidth = wWidth - 16 * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - 32;
  const height = canvasHeight - 32;
  const step = width / data.length;
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  return (
    <Box width={canvasWidth} height={canvasHeight} mt={4} pl={8} pt={2} pb={4}>
      <Box position="absolute" width={canvasWidth} height={canvasHeight}>
        <VStack
          justifyContent="space-between"
          width="100%"
          height={canvasHeight - 12}
          textAlign="right">
          <HStack width="100%" alignItems="center" space={2}>
            <Text color="gray.300">${maxValue}</Text>
            <Box height={0.5} flex={1} bg="gray.200" />
          </HStack>
          <HStack width="100%" alignItems="center" space={2}>
            <Text color="gray.300">${(maxValue - minValue) / 2}</Text>
            <Box height={0.5} flex={1} bg="gray.200" />
          </HStack>
          <HStack width="100%" alignItems="center" space={2}>
            <Text color="gray.300">${minValue}</Text>
            <Box height={0.5} flex={1} bg="gray.200" />
          </HStack>
        </VStack>
        <HStack
          ml={6}
          mt={2}
          position="absolute"
          bottom={0}
          width="100%"
          height="100%">
          {dates.map((date, i) => (
            <Box
              key={`${date}-text`}
              px={6}
              position="absolute"
              left={i * step}
              bottom={0}>
              <Text color="gray.300">{formatter.format(new Date(date))}</Text>
            </Box>
          ))}
        </HStack>
      </Box>
      <Box width={width} height={height}>
        {data.map((d, i) =>
          d.value ? (
            <AnimatedBox
              entering={FadeInDown.duration(1000)}
              key={d.date}
              width={step}
              px={6}
              position="absolute"
              left={i * step}
              bottom={0}
              height={lerp(0, height, d.value / maxValue)}>
              <Box
                bg={`${GRAPH_COLORS[i]}.100`}
                borderTopRadius="md"
                width="100%"
                height="100%">
                <Box
                  bg={`${GRAPH_COLORS[i]}.400`}
                  borderRadius="md"
                  height={25}
                />
              </Box>
            </AnimatedBox>
          ) : null,
        )}
      </Box>
    </Box>
  );
};
