import React from 'react';
import {Container} from '../../components/container/Container';
import {Footer} from '../../components/footer/Footer';
import {Input} from '../../components/input/Input';
import {Text, Button, VStack} from 'native-base';
import {useFormik} from 'formik';
import {z} from 'zod';
import {toFormikValidationSchema} from 'zod-formik-adapter';
import {NavigationProp} from '@react-navigation/native';
import {MailIcon} from '../../components/input/MailIcon';
import {LockIcon} from '../../components/input/LockIcon';
import {AppStackParamList} from '../../navigators';

const validationSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({confirmPassword, password}, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'The passwords did not match',
      });
    }
  });

const SignUpScreen = ({
  navigation,
}: {
  navigation: NavigationProp<AppStackParamList>;
}) => {
  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {email: '', password: '', confirmPassword: ''},
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: currentValues => console.log(currentValues),
  });
  return (
    <Container
      pattern={1}
      footer={
        <Footer
          text="Already have an account?"
          emphasedText="Login here"
          onPress={() => navigation.navigate('Login')}
        />
      }>
      <VStack
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
        space={4}>
        <Text fontSize="2xl" fontWeight="medium">
          Create an account
        </Text>
        <Text fontSize="lg" textAlign="center" color="muted.600">
          Let us know what's your name, email and your password
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
          <Input
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            hasError={!!errors.confirmPassword}
            placeholder="Confirm password"
            errorMessage={errors.confirmPassword}
            type="password"
            icon={<LockIcon />}
          />
        </VStack>
        <Button width="60%" rounded={50} bg="teal.400" onPress={handleSubmit}>
          Create your account
        </Button>
      </VStack>
    </Container>
  );
};

export default SignUpScreen;
