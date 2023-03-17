import React from 'react';
import {Box, Button, Text} from 'native-base';
import {width} from './Slide';

interface Props {
  subtitle: string;
  description: string;
  isLast?: boolean;
  onPress: () => void;
}

export const Subslide = ({subtitle, description, isLast, onPress}: Props) => {
  return (
    <Box width={width} justifyContent="center" alignItems="center" px="12">
      <Text fontWeight="semibold" fontSize="2xl" textAlign="center" mb="4">
        {subtitle}
      </Text>
      <Text fontSize="lg" textAlign="center" mb="4">
        {description}
      </Text>
      <Button
        width="100%"
        bg={isLast ? 'teal.400' : 'muted.200'}
        rounded={50}
        onPress={onPress}>
        <Text fontSize="lg" color={isLast ? 'white' : 'black'}>
          {isLast ? "Let's get started" : 'Next'}
        </Text>
      </Button>
    </Box>
  );
};
