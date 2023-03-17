import React from 'react';
import {VStack, Box, Image} from 'native-base';
export const Background = () => {
  return (
    <VStack height="100%" width="100%" bg="white">
      <Box height="1/3" width="100%" bg="white">
        <Image
          source={require('../container/assets/1.jpg')}
          alt="drawer image"
          resizeMode="repeat"
          position="absolute"
          borderTopLeftRadius="8xl"
          width="100%"
          height="100%"
        />
        <Box
          width="100%"
          height="100%"
          bg="white"
          position="absolute"
          borderBottomRightRadius="8xl"
        />
      </Box>
      <Box height="1/3" width="100%">
        <Box height="50%" width="100%" bg="white" />
        <Box height="50%" width="100%" bg="darkBlue.800" />
        <Image
          source={require('../container/assets/1.jpg')}
          alt="drawer image"
          resizeMode="repeat"
          position="absolute"
          borderTopLeftRadius="8xl"
          borderBottomRightRadius="8xl"
          width="100%"
          height="100%"
        />
      </Box>
      <Box height="1/3" width="100%" bg="darkBlue.800">
        <Image
          source={require('../container/assets/1.jpg')}
          alt="drawer image"
          resizeMode="repeat"
          position="absolute"
          width="100%"
          height="100%"
        />
        <Box
          height="100%"
          width="100%"
          position="absolute"
          alignItems="center"
          justifyContent="center"
          borderTopLeftRadius="8xl"
          bg="darkBlue.800"
        />
      </Box>
    </VStack>
  );
};
