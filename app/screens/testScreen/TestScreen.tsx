import {Box} from 'native-base';
import React, {useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import Svg, {Rect, Defs, ClipPath} from 'react-native-svg';

import wave from './data/wave.json';

const {width: wWidth} = Dimensions.get('window');

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

const BAR_WIDTH = 4;
const BAR_MARGIN = 1;
const offset = wWidth / 2;

export const TestScreen = () => {
  const x = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.root}>
      <Image source={require('./data/cover.jpg')} style={styles.cover} />
      <AnimatedBox
        width={200}
        height={200}
        bg="red.500"
        style={{
          opacity: x.interpolate({
            inputRange: [0, wave.width * (BAR_WIDTH + BAR_MARGIN) + offset],
            outputRange: [1, 0],
          }) as unknown as number,
        }}
      />
      <Box height="1/2" width="100%">
        {/* <Animated.ScrollView
          horizontal
          bounces={false}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={true}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {
            useNativeDriver: false,
          })}>
          <Svg
            width={wWidth * 2}
            height={160}
            viewBox={`0 0 ${wWidth * 2} 160`}>
            <Defs>
              <ClipPath id="clip">
                <AnimatedRect
                  x={x.interpolate({
                    inputRange: [0, wWidth * 2 - 10],
                    outputRange: [`${0}`, `${wWidth / 2}`],
                  })}
                  y="0"
                  width={wWidth / 2}
                  height="80"
                />
              </ClipPath>
            </Defs>
            <Rect
              x="5"
              y="0"
              width={wWidth * 2 - 10}
              height="160"
              fill="blue"
            />
            <Rect
              x="5"
              y="0"
              width={wWidth * 2 - 10}
              height="160"
              fill="red"
              clipPath="#clip"
            />
          </Svg>
        </Animated.ScrollView> */}
        <Box>
          <Animated.ScrollView
            horizontal
            bounces={false}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {
              useNativeDriver: false,
            })}>
            <Waveform data={wave} color="white" />
            <Box position="absolute" top={0} bottom={0} left={0} right={0}>
              <Waveform data={wave} color="#fb923c" progress={x} />
            </Box>
          </Animated.ScrollView>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

interface WaveformProps {
  data: {width: number; height: number; samples: number[]};
  color: string;
  progress?: Animated.Value;
}
const Waveform = ({data, color, progress}: WaveformProps) => {
  const width = data.width * (BAR_WIDTH + BAR_MARGIN) + offset;
  const height = data.height + BAR_MARGIN + data.height * 0.61;
  const xOther = progress
    ? (progress.interpolate({
        inputRange: [0, width - wWidth],
        outputRange: [`${0}`, `${width}`],
      }) as unknown as number)
    : null;

  return (
    <Box>
      <Svg width={width} height={height}>
        <Defs>
          <ClipPath id="progress">
            <AnimatedRect x={0} y={0} width={width} height={height} />
          </ClipPath>
        </Defs>
        {data.samples.map((sample, index) => (
          <React.Fragment key={index}>
            <Rect
              clipPath="url(#progress)"
              y={data.height - sample}
              x={index * (BAR_WIDTH + BAR_MARGIN) + offset}
              fill={color}
              height={sample}
              width={BAR_WIDTH}
            />
            <AnimatedRect
              //clipPath="url(#progress)"
              y={data.height + BAR_MARGIN}
              x={
                xOther !== null
                  ? Animated.multiply(xOther, index)
                  : index * (BAR_WIDTH + BAR_MARGIN) + offset
              }
              fill={color}
              opacity={0.5}
              height={sample}
              width={BAR_WIDTH}
            />
          </React.Fragment>
        ))}
      </Svg>
    </Box>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cover: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
