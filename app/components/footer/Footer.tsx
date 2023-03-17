import React from 'react';
import {Button, HStack, Text} from 'native-base';
import {SocialLogin} from '../socialLogin/SocialLogin';

interface Props {
  text: string;
  emphasedText: string;
  onPress: () => void;
}

export const Footer = ({text, emphasedText, onPress}: Props) => {
  return (
    <>
      <SocialLogin />
      <HStack alignItems="center" space={1}>
        <Text color="white">{text}</Text>
        <Button variant="link" onPress={onPress}>
          <Text color="teal.600">{emphasedText}</Text>
        </Button>
      </HStack>
    </>
  );
};
