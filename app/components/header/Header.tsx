import {HStack, Text} from 'native-base';
import React, {ReactNode} from 'react';

interface Props {
  left: ReactNode;
  title: string;
  right: ReactNode;
  color?: string;
}

export const Header = ({left, right, title, color}: Props) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" mx={4} mt={4}>
      {left}
      <Text fontSize="lg" color={color ?? 'black'}>
        {title}
      </Text>
      {right}
    </HStack>
  );
};
