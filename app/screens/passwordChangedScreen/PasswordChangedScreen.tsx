import React from 'react';
import {Container} from '../../components/container/Container';
import {
  Button,
  Box,
  CheckIcon,
  CloseIcon,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import {NavigationProp} from '@react-navigation/native';
import {AppStackParamList} from '../../navigators';

const PasswordChangedScreen = ({
  navigation,
}: {
  navigation: NavigationProp<AppStackParamList>;
}) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box rounded="full" bg="white" p={2}>
          <IconButton
            icon={<CloseIcon />}
            size="md"
            onPress={() => navigation.navigate('Login')}
          />
        </Box>
      }>
      <VStack
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
        space={8}>
        <VStack width="80%" alignItems="center" space={4}>
          <Box rounded="full" bg="green.200" p={4}>
            <CheckIcon size={16} color="green.500" />
          </Box>
          <Text fontSize="2xl" fontWeight="medium">
            Your password was succesfully changed
          </Text>
          <Text fontSize="lg" textAlign="center" color="muted.600">
            Close this window and login again
          </Text>
        </VStack>
        <VStack width="80%" alignItems="center" space={4}>
          <Button
            width="60%"
            rounded={50}
            bg="teal.400"
            onPress={() => navigation.navigate('Login')}>
            Login again
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default PasswordChangedScreen;
