import React, {ChangeEvent, ReactNode} from 'react';
import {
  Box,
  CheckIcon,
  CloseIcon,
  FormControl,
  Icon,
  WarningOutlineIcon,
  Input as NBInput,
} from 'native-base';

interface Props {
  value: string;
  onChange: (e: string | ChangeEvent<string>) => void;
  hasError?: boolean;
  placeholder?: string;
  errorMessage?: string;
  icon?: ReactNode;
  type?: 'text' | 'password';
}

export const Input = ({
  value,
  placeholder,
  onChange,
  hasError,
  errorMessage,
  icon,
  type,
}: Props) => (
  <FormControl isInvalid={hasError}>
    <NBInput
      size="lg"
      value={value}
      placeholder={placeholder}
      type={type ?? 'text'}
      onChangeText={onChange}
      borderColor={hasError ? 'danger.500' : value ? 'teal.500' : 'muted.600'}
      autoCapitalize="none"
      InputLeftElement={
        icon ? (
          <Icon
            as={icon}
            size={5}
            ml={4}
            color={hasError ? 'danger.500' : value ? 'teal.500' : 'muted.600'}
          />
        ) : undefined
      }
      InputRightElement={
        value ? (
          <Box
            mr={2}
            width={6}
            height={6}
            borderRadius="full"
            alignItems="center"
            justifyContent="center"
            bg={hasError ? 'danger.500' : 'teal.500'}>
            {hasError ? (
              <CloseIcon color="white" size={3} />
            ) : (
              <CheckIcon color="white" size={3} />
            )}
          </Box>
        ) : undefined
      }
    />
    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
      {errorMessage}
    </FormControl.ErrorMessage>
  </FormControl>
);
