import {Box, IconButton} from 'native-base';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Facebook = () => (
  <Svg width="32" height="32" viewBox="0 0 72 72">
    <Path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
    <Path
      fill="#fff"
      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
    />
  </Svg>
);

const Google = () => (
  <Svg width="32" height="32" viewBox="0 0 72 72">
    <Path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <Path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <Path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <Path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </Svg>
);

const Apple = () => (
  <Svg x="0px" y="0px" width="32" height="32" viewBox="0 0 104 104">
    <Path d="M46.955 1.353c.246 3.559-.915 6.425-2.628 8.527-2.519 3.092-6.232 4.533-8.422 4.105-.412-2.47.61-5.623 2.686-8.164C40.549 3.428 43.441 1.578 46.955 1.353zM36.378 17.159c2.498 0 5.203-2.532 9.658-2.532 2.007 0 7.762.607 10.934 5.486-1.26.913-5.917 3.843-5.917 10.514 0 7.859 6.366 10.579 7.33 11.077-.348 1.299-2.026 5.802-4.856 9.329-.876 1.091-3.507 5.281-7.436 5.281-3.568 0-4.926-2.208-9.043-2.208-4.69 0-4.914 2.248-9.476 2.248-.958 0-2.363-.433-3.477-1.413-3.955-3.482-10.478-12.483-10.478-23.71 0-11.093 7.357-16.418 13.809-16.418C31.482 14.812 33.796 17.159 36.378 17.159z" />
  </Svg>
);

export const SocialLogin = () => {
  return (
    <Box alignItems="center" justifyContent="center" flexDirection="row">
      <IconButton
        bg="white"
        rounded="full"
        width={8}
        height={8}
        mr={4}
        alignItems="center"
        justifyContent="center">
        <Facebook />
      </IconButton>
      <IconButton
        bg="white"
        rounded="full"
        width={8}
        height={8}
        mr={4}
        alignItems="center"
        justifyContent="center"
        name="question">
        <Google />
      </IconButton>
      <IconButton
        bg="white"
        rounded="full"
        width={8}
        height={8}
        alignItems="center"
        justifyContent="center">
        <Apple />
      </IconButton>
    </Box>
  );
};