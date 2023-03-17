import React from 'react';
import {Container} from '../../components/container/Container';
import {Footer} from '../../components/footer/Footer';
import {Input} from '../../components/input/Input';
import {Button, Text, Checkbox, VStack, HStack} from 'native-base';
import {useFormik} from 'formik';
import {z} from 'zod';
import {toFormikValidationSchema} from 'zod-formik-adapter';
import {
  CompositeNavigationProp,
  NavigationProp,
} from '@react-navigation/native';
import {MailIcon} from '../../components/input/MailIcon';
import {LockIcon} from '../../components/input/LockIcon';
import {AppStackParamList, MainStackParamList} from '../../navigators';

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const LoginScreen = ({
  navigation,
}: {
  navigation: CompositeNavigationProp<
    NavigationProp<MainStackParamList>,
    NavigationProp<AppStackParamList>
  >;
}) => {
  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {email: '', password: '', remember: false},
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: _ =>
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      }),
  });
  return (
    <Container
      pattern={0}
      footer={
        <Footer
          text="Don't have an account?"
          emphasedText="Sign Up here"
          onPress={() => navigation.navigate('SignUp')}
        />
      }>
      <VStack
        height="100%"
        width="100%"
        space={4}
        alignItems="center"
        justifyContent="center">
        <Text fontSize="2xl" fontWeight="medium">
          Welcome back
        </Text>
        <Text fontSize="lg" textAlign="center" color="muted.600">
          Use your credentials below and login to your account
        </Text>
        <VStack width="80%" space={4} alignItems="center">
          <Input
            value={values.email}
            onChange={handleChange('email')}
            hasError={!!errors.email}
            placeholder="Enter your email"
            errorMessage={errors.email}
            icon={<MailIcon />}
          />
          <Input
            value={values.password}
            onChange={handleChange('password')}
            hasError={!!errors.password}
            placeholder="Enter your password"
            errorMessage={errors.password}
            type="password"
            icon={<LockIcon />}
          />
          <HStack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Checkbox
              value="remember"
              onChange={isSelected =>
                handleChange('remember')(isSelected.toString())
              }>
              Remember me
            </Checkbox>
            <Button
              variant="link"
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot password
            </Button>
          </HStack>
          <Button width="60%" rounded={50} bg="teal.400" onPress={handleSubmit}>
            Log into your account
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default LoginScreen;
