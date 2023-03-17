import React from 'react';
import {Container} from '../../components/container/Container';
import {Button, Text, VStack} from 'native-base';
import {useFormik} from 'formik';
import {z} from 'zod';
import {toFormikValidationSchema} from 'zod-formik-adapter';
import {MailIcon} from '../../components/input/MailIcon';
import {Footer} from '../../components/footer/Footer';
import {Input} from '../../components/input/Input';
import {Linking} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {AppStackParamList} from '../../navigators';

const validationSchema = z.object({
  email: z.string().email(),
});

const ForgotPasswordScreen = ({
  navigation,
}: {
  navigation: NavigationProp<AppStackParamList>;
}) => {
  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {email: ''},
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: _ => navigation.navigate('PasswordChanged'),
  });

  return (
    <Container
      pattern={2}
      footer={
        <Footer
          text="Don't work?"
          emphasedText="Try another way"
          onPress={() => Linking.openURL('mailto:help@support.com')}
        />
      }>
      <VStack
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
        space={8}>
        <VStack width="80%" alignItems="center" space={4}>
          <Text fontSize="2xl" fontWeight="medium">
            Forgot password?
          </Text>
          <Text fontSize="lg" textAlign="center" color="muted.600">
            Enter email address associated with your account
          </Text>
        </VStack>
        <VStack width="80%" alignItems="center" space={4}>
          <Input
            value={values.email}
            onChange={handleChange('email')}
            hasError={!!errors.email}
            placeholder="Enter your email"
            errorMessage={errors.email}
            icon={<MailIcon />}
          />
          <Button width="60%" rounded={50} bg="teal.400" onPress={handleSubmit}>
            Reset password
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default ForgotPasswordScreen;
