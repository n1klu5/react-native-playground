import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  CompositeNavigationProp,
  NavigationProp,
} from '@react-navigation/native';
import {
  AddIcon,
  Box,
  CloseIcon,
  DeleteIcon,
  FavouriteIcon,
  HamburgerIcon,
  IconButton,
  Image,
  QuestionIcon,
  SunIcon,
  Text,
  ThreeDotsIcon,
  VStack,
} from 'native-base';
import React, {ReactNode} from 'react';
import {Dimensions} from 'react-native';
import {HomeStackParamList, MainStackParamList} from '../../navigators';
import {Header} from '../header/Header';
import {DrawerItem} from './DrawerItem';

export const {width, height} = Dimensions.get('window');
interface BaseDrawerItem {
  label: string;
  icon: ReactNode;
  color: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeStackParamList;
}

interface ActionDrawerItem extends BaseDrawerItem {
  onPress: (action: () => void) => void;
}

const items: Array<ScreenDrawerItem | ActionDrawerItem> = [
  {
    screen: 'Outfits',
    label: 'Outfit Ideas',
    icon: <QuestionIcon color="white" key="outfits-icon" />,
    color: 'teal.600',
  },
  {
    screen: 'Favourites',
    label: 'Favourite outfits',
    icon: <FavouriteIcon color="white" key="favourite-icon" />,
    color: 'orange.600',
  },
  {
    screen: 'EditProfile',
    label: 'Edit profile',
    icon: <SunIcon color="white" key="profile-icon" />,
    color: 'yellow.600',
  },
  {
    screen: 'History',
    label: 'Transactions history',
    icon: <AddIcon color="white" key="history-icon" />,
    color: 'pink.600',
  },
  {
    screen: 'Settings',
    label: 'Notification settings',
    icon: <ThreeDotsIcon color="white" key="settings-icon" />,
    color: 'blue.600',
  },
  {
    onPress: (resetAction: () => void) => resetAction(),
    label: 'Logout',
    icon: <DeleteIcon color="white" key="logout-icon" />,
    color: 'black',
  },
];

export const Drawer = ({
  navigation,
}: {
  navigation: CompositeNavigationProp<
    NavigationProp<MainStackParamList>,
    DrawerNavigationProp<HomeStackParamList>
  >;
}) => {
  return (
    <VStack height="100%" width="100%" bg="white">
      <Box height="15%" width="100%" bg="white">
        <Box
          width="100%"
          height="100%"
          bg="darkBlue.800"
          position="absolute"
          borderBottomRightRadius="8xl">
          <Header
            left={
              <IconButton
                key="h1"
                color="white"
                variant="ghost"
                icon={<CloseIcon color="white" key="h1-icon" />}
                size="sm"
                onPress={() => navigation.closeDrawer()}
              />
            }
            title="My profile"
            color="white"
            right={
              <IconButton
                key="h2"
                variant="ghost"
                icon={<HamburgerIcon color="white" key="h2-icon" />}
                size="md"
                onPress={() => {}}
              />
            }
          />
        </Box>
      </Box>
      <Box height="70%" width="100%">
        <Box height="50%" width="100%" bg="darkBlue.800" />
        <Box height="50%" width="100%" bg="white" />
        <Image
          source={require('../container/assets/1.jpg')}
          alt="drawer image"
          resizeMode="repeat"
          position="absolute"
          bottom={0}
          width="100%"
          height="15%"
        />
        <Box
          rounded="full"
          w={16}
          h={16}
          bg="teal.400"
          position="absolute"
          left={width / 4}
          top={-32}
          zIndex={50}
        />
        <VStack
          height="100%"
          width="100%"
          position="absolute"
          alignItems="center"
          justifyContent="center"
          borderTopLeftRadius="8xl"
          borderBottomRightRadius="8xl"
          bg="white"
          space={4}>
          <VStack width="100%" alignItems="center">
            <Text fontSize="lg" fontWeight="bold">
              Mike Peter
            </Text>
            <Text fontSize="md">mike@flexstudio.com</Text>
          </VStack>
          <VStack
            width="100%"
            pl={8}
            alignItems="flex-start"
            justifyContent="center">
            {items.map(item => (
              <DrawerItem
                key={item.label}
                label={item.label}
                color={item.color}
                icon={item.icon}
                onPress={() => {
                  if (isActionDrawerItem(item)) {
                    item.onPress(() =>
                      navigation.reset({
                        index: 0,
                        routes: [
                          {
                            name: 'Authentication',
                          },
                        ],
                      }),
                    );
                    return;
                  }
                  navigation.navigate(item.screen);
                }}
              />
            ))}
          </VStack>
        </VStack>
      </Box>
      <Box height="15%" width="100%" bg="white">
        <Image
          source={require('../container/assets/1.jpg')}
          alt="drawer image"
          resizeMode="repeat"
          position="absolute"
          borderTopLeftRadius="8xl"
          width="100%"
          height="100%"
        />
      </Box>
    </VStack>
  );
};

const isActionDrawerItem = (
  item: ScreenDrawerItem | ActionDrawerItem,
): item is ActionDrawerItem =>
  (item as ActionDrawerItem).onPress ? true : false;
