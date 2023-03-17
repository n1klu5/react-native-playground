import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  Box,
  Button,
  CheckIcon,
  CircleIcon,
  HamburgerIcon,
  IconButton,
  ScrollView,
  VStack,
} from 'native-base';
import React, {useRef, useState} from 'react';
import {Header} from '../../components/header/Header';
import {HomeStackParamList} from '../../navigators';
import {Dimensions, Pressable} from 'react-native';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.Change interpolation="easeInOut" durationMs={1000} />
  </Transition.Together>
);

export const {width} = Dimensions.get('window');

const colors = ['#BFEAF5', '#BEECC4', '#F3F0EF', '#D5C3BB'];
const items = new Array(10).fill(undefined).map((_, index) => ({
  id: index,
  color: colors[Math.floor(Math.random() * 10) % 4],
  size: (Math.floor(Math.random() * 10) % 2) + 1,
}));

export const FavouritesScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<HomeStackParamList>;
}) => {
  const [outfits, setOutfits] = useState(items);
  const [selected, setSelected] = useState<number[]>([]);
  const left = useRef<TransitioningView>(null);
  const right = useRef<TransitioningView>(null);

  const handleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <VStack bg="white" w="100%" h="100%">
      <Header
        left={
          <IconButton
            key="o1"
            variant="ghost"
            icon={<HamburgerIcon color="black" key="o1-icon" />}
            size="sm"
            onPress={() => navigation.openDrawer()}
          />
        }
        title="Favourites outfits"
        right={
          <IconButton
            key="o2"
            variant="ghost"
            icon={<CircleIcon color="black" key="o2-icon" />}
            size="sm"
            onPress={() => true}
          />
        }
      />
      <Box height="3/4" width="100%" borderBottomRightRadius="8xl">
        <Box height="100%" width="100%" bg="darkBlue.800" />
        <Box
          width="100%"
          height="100%"
          bg="white"
          position="absolute"
          alignItems="center"
          borderBottomRightRadius="8xl">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box flexDirection="row" my={8}>
              <Box mr={4}>
                <Transitioning.View ref={left} transition={transition}>
                  {outfits
                    .filter(({id}) => id % 2 === 0)
                    .map(item => (
                      <Tile
                        key={item.id}
                        color={item.color}
                        size={item.size}
                        selected={selected.includes(item.id)}
                        onPress={() => handleSelect(item.id)}
                      />
                    ))}
                </Transitioning.View>
              </Box>
              <Box>
                <Transitioning.View ref={right} transition={transition}>
                  {outfits
                    .filter(({id}) => id % 2 !== 0)
                    .map(item => (
                      <Tile
                        key={item.id}
                        color={item.color}
                        size={item.size}
                        selected={selected.includes(item.id)}
                        onPress={() => handleSelect(item.id)}
                      />
                    ))}
                </Transitioning.View>
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </Box>

      <Box
        height="1/4"
        width="100%"
        bg="darkBlue.800"
        alignItems="center"
        justifyContent="center"
        borderTopLeftRadius="8xl">
        <Button
          bg="teal.400"
          rounded="8xl"
          width="300px"
          size="md"
          onPress={() => {
            left.current?.animateNextTransition();
            right.current?.animateNextTransition();
            setOutfits(outfits.filter(outfit => !selected.includes(outfit.id)));
          }}>
          Add more to favourites
        </Button>
      </Box>
    </VStack>
  );
};

const Tile = ({
  color,
  size,
  selected,
  onPress,
}: {
  color: string;
  size: number;
  selected: boolean;
  onPress: () => void;
}) => (
  <Pressable onPress={onPress}>
    <Box
      mb={4}
      rounded="xl"
      bg={color}
      width={(width - 50) / 2}
      height={100 * size}
      p={4}
      alignItems="flex-end">
      {selected ? (
        <Box
          rounded="full"
          bg="teal.400"
          w={5}
          h={5}
          alignItems="center"
          justifyContent="center">
          <CheckIcon color="white" size="xs" />
        </Box>
      ) : null}
    </Box>
  </Pressable>
);
