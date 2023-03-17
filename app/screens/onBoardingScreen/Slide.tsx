import React from 'react';
import {Box, Image, Text} from 'native-base';
import {Dimensions} from 'react-native';

interface Props {
  title: string;
  right?: boolean;
  picture: number;
}

export const {width, height} = Dimensions.get('window');

export const Slide = ({title, right, picture}: Props) => {
  return (
    <Box width={width} justifyContent="center">
      <Box position="absolute" justifyContent="flex-end">
        <Image
          source={picture}
          alt="slide nice image"
          resizeMode="contain"
          w={width}
          h={0.5775 * height}
          borderBottomRightRadius="8xl"
        />
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        style={{
          transform: [
            {translateX: right ? width / 2 - 70 : -width / 2 + 70},
            {rotate: right ? '-90deg' : '90deg'},
          ],
        }}>
        <Text fontSize="6xl" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </Box>
  );
};
