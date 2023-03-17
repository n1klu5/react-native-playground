import React, {ErrorInfo} from 'react';
import {View, Text, Button} from 'react-native';

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo | null;
  onReset(): void;
}

export function ErrorDetails({error, errorInfo, onReset}: ErrorDetailsProps) {
  return (
    <View>
      <Text>{error.message}</Text>
      <Text>{errorInfo?.componentStack}</Text>
      <Button title="Reset" onPress={onReset} />
    </View>
  );
}
