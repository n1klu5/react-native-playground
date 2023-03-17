import {NavigationProp} from '@react-navigation/native';
import {Center, Box, ScrollView} from 'native-base';
import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {AppStackParamList} from '../../navigators';
import {Dot} from './Dot';
import {Slide, width} from './Slide';
import {Subslide} from './Subslide';
import {useScrollHandler} from './use-scroll-handler';

const AnimatedCenter = Animated.createAnimatedComponent(Center);
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);
const AnimatedBox = Animated.createAnimatedComponent(Box);

const slides = [
  {
    title: 'Relaxed',
    color: '#BFEAF5',
    picture: require('./assets/lion_1.jpg'),
    subtitle: 'Find Your Outfits',
    description: 'find your outfits, find your outfits',
  },
  {
    title: 'Playful',
    color: '#BEECC4',
    picture: require('./assets/lion_2.jpg'),
    subtitle: 'Hear it Firts, Wear it First',
    description: 'hear it firts, wear it first, hear it firts, wear it first',
  },
  {
    title: 'Excentric',
    color: '#FFE4D9',
    picture: require('./assets/lion_3.jpg'),
    subtitle: 'Your Style, Your Way',
    description: 'your style, your way, your style, your way',
  },
  {
    title: 'Funky',
    color: '#FFDDDD',
    picture: require('./assets/lion_4.jpg'),
    subtitle: 'Look Good, Feel Good',
    description: 'look good, feel good, look good, feel good',
  },
];

export default function OnBoardingScreen({
  navigation,
}: {
  navigation: NavigationProp<AppStackParamList>;
}) {
  const {scrollXPosition, onScrollHandler} = useScrollHandler();
  const scroll = useRef<typeof AnimatedScrollView>(null);

  const bgColor = scrollXPosition.interpolate({
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  }) as unknown as string;

  return (
    <Center w="100%" h="100%" bg="white">
      <AnimatedCenter
        w="100%"
        height="60%"
        borderBottomRightRadius="8xl"
        style={{
          backgroundColor: bgColor,
        }}>
        <AnimatedScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          bounces={false}
          onScroll={onScrollHandler}>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              title={slide.title}
              right={!!(index % 2)}
              picture={slide.picture}
            />
          ))}
        </AnimatedScrollView>
      </AnimatedCenter>
      <Box w="100%" h="40%">
        <AnimatedCenter
          w="100%"
          h="100%"
          position="absolute"
          style={{
            backgroundColor: bgColor,
          }}
        />
        <Box bg="white" borderTopLeftRadius="8xl">
          <Box
            bg="white:alpha.100"
            width="100%"
            height="6"
            position="absolute"
            flexDirection="row"
            alignItems="center"
            justifyContent="center">
            {slides.map((slide, index) => (
              <Dot
                key={index}
                index={index}
                selectedIndex={Animated.divide(scrollXPosition, width)}
              />
            ))}
          </Box>
          <AnimatedBox
            w={width * slides.length}
            h="100%"
            flexDirection="row"
            style={{
              transform: [
                {
                  translateX: Animated.multiply(scrollXPosition, -1),
                },
              ],
            }}>
            {slides.map((slide, index) => (
              <Subslide
                key={index}
                subtitle={slide.subtitle}
                description={slide.description}
                isLast={index === slides.length - 1}
                onPress={() => {
                  if (index === slides.length - 1) {
                    navigation.navigate('Welcome');
                    return;
                  }
                  if (scroll.current) {
                    (scroll.current as any).scrollTo({
                      x: width * (index + 1),
                    });
                  }
                }}
              />
            ))}
          </AnimatedBox>
        </Box>
      </Box>
    </Center>
  );
}
