import {NavigationProp} from '@react-navigation/native';
import {Center, Box, Button, Image, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

export default function WelcomeScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <Center w="100%" h="100%" bg="white">
      <Box
        w="100%"
        h="60%"
        borderBottomRightRadius="8xl"
        bg="orange.100"
        alignItems="center"
        justifyContent="center">
        <Image
          source={require('./assets/lion_5.jpg')}
          alt="welcom background image"
          resizeMode="contain"
          borderBottomRightRadius="8xl"
          w={width}
          h={0.5775 * height}
        />
      </Box>
      <Box w="100%" h="40%">
        <Center w="100%" h="100%" position="absolute" bg="orange.100" />
        <Box
          w="100%"
          h="100%"
          py={4}
          borderTopLeftRadius="8xl"
          bg="white"
          alignItems="center">
          <Text mb={4} fontSize="xl">
            Let's get started
          </Text>
          <Button
            width="60%"
            mb={4}
            bg="teal.400"
            rounded={50}
            onPress={() => navigation.navigate('Login')}>
            <Text fontSize="lg" color="white">
              Have an account? Login
            </Text>
          </Button>
          <Button
            width="60%"
            mb={4}
            bg="muted.200"
            rounded={50}
            onPress={() => navigation.navigate('SignUp')}>
            <Text fontSize="lg" color="black">
              Join us, It's Free
            </Text>
          </Button>
          <Button
            width="60%"
            bg="muted.200"
            rounded={50}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text fontSize="lg" color="black">
              Forgot password?
            </Text>
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
