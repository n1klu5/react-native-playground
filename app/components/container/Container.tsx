import {Box, Image} from 'native-base';
import React, {ReactNode} from 'react';
import {Dimensions} from 'react-native';

const assets = [
  require('./assets/1.jpg'),
  require('./assets/2.jpg'),
  require('./assets/3.jpg'),
];
export const {width, height} = Dimensions.get('window');

interface Props {
  pattern: 0 | 1 | 2;
  children?: ReactNode;
  footer?: ReactNode;
}

export const Container = ({pattern, children, footer}: Props) => {
  return (
    <Box height="100%" width="100%" bg="darkBlue.800">
      <Box height="15%" width="100%" bg="white">
        <Box
          width="100%"
          height="100%"
          borderBottomLeftRadius="8xl"
          overflow="hidden">
          <Image
            source={assets[pattern]}
            alt="background image"
            resizeMode="repeat"
            borderBottomLeftRadius="8xl"
            w={width}
            h={0.4 * height}
          />
        </Box>
      </Box>
      <Box height="70%" width="100%">
        <Image
          source={assets[pattern]}
          alt="background image"
          resizeMode="repeat"
          position="absolute"
          top={0}
          w={width}
          h={0.4 * height}
        />
        <Box
          height="100%"
          width="100%"
          borderRadius="8xl"
          borderTopLeftRadius={0}
          bg="white">
          {children}
        </Box>
      </Box>
      <Box
        height="15%"
        width="100%"
        bg="darkBlue.800"
        alignItems="center"
        justifyContent="center">
        {footer}
      </Box>
    </Box>
  );
};
