import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export const LockIcon = () => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="grey"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <Rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <Path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
);
