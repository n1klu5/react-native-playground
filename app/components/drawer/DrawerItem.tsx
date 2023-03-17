import {Box, Button, HStack, Text} from 'native-base';
import React, {ReactNode} from 'react';

interface Props {
  icon: ReactNode;
  color: string;
  label: string;
  onPress: () => void;
}

export const DrawerItem = ({icon, label, color, onPress}: Props) => {
  return (
    <Button variant="ghost" onPress={onPress}>
      <HStack alignItems="center" justifyContent="flex-start" space={2}>
        <Box rounded="full" bg={color} p={2} key={`${label}-box`}>
          <React.Fragment key={`${label}-item-icon`}>{icon}</React.Fragment>
        </Box>
        <Text key={`${label}-text`}>{label}</Text>
      </HStack>
    </Button>
  );
};
