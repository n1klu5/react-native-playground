import {DrawerNavigationProp} from '@react-navigation/drawer';
import {
  ArrowBackIcon,
  Box,
  IconButton,
  VStack,
  Image,
  Text,
  Button,
  ScrollView,
  HStack,
} from 'native-base';
import React from 'react';
import {Header} from '../../components/header/Header';
import {HomeStackParamList} from '../../navigators';
import {Dimensions} from 'react-native';
import Svg, {Line, Path, Polyline} from 'react-native-svg';
import {Graph, GRAPH_COLORS} from './Graph';

export const {width} = Dimensions.get('window');

const data = [
  {
    date: '2022-10-17',
    value: 100,
    transaxtionId: '#245671',
  },
  {
    date: '2022-11-17',
    value: 0,
    transaxtionId: '',
  },
  {
    date: '2022-12-11',
    value: 50,
    transaxtionId: '#245672',
  },
  {
    date: '2023-01-05',
    value: 200,
    transaxtionId: '#245673',
  },
  {
    date: '2023-02-02',
    value: 0,
    transaxtionId: '',
  },
  {
    date: '2023-03-01',
    value: 0,
    transaxtionId: '',
  },
];

const ExternalLinkIcon = () => (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
    <Path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <Polyline points="15 3 21 3 21 9" />
    <Line x1="10" y1="14" x2="21" y2="3" />
  </Svg>
);

export const TransactionsHistoryScreen = ({
  navigation,
}: {
  navigation: DrawerNavigationProp<HomeStackParamList>;
}) => {
  return (
    <VStack bg="white" w="100%" h="100%">
      <Header
        left={
          <IconButton
            key="o1"
            variant="ghost"
            icon={<ArrowBackIcon color="black" key="o1-icon" />}
            size="sm"
            onPress={() => navigation.goBack()}
          />
        }
        title="Transactions history"
        right={
          <IconButton
            key="o2"
            variant="ghost"
            icon={<ExternalLinkIcon key="o2-icon" />}
            size="sm"
            onPress={() => true}
          />
        }
      />
      <Box height="3/4" width="100%" borderBottomRightRadius="8xl">
        <Image
          source={require('../../components/container/assets/1.jpg')}
          alt="history pattern image"
          resizeMode="repeat"
          height="100%"
          width="100%"
        />
        <Box
          width="100%"
          height="100%"
          bg="white"
          position="absolute"
          alignItems="center"
          borderBottomRightRadius="8xl"
          px={8}
          pt={4}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            w="100%">
            <VStack alignItems="center">
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="gray.300"
                isTruncated>
                TOTAL SPENT
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                ${data.reduce((acc, next) => (acc += next.value), 0)}
              </Text>
            </VStack>
            <VStack>
              <Button bg="teal.300" rounded="3xl">
                All Time
              </Button>
            </VStack>
          </Box>
          <Graph data={data} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            width="100%"
            height="100%"
            my={4}>
            {data
              .filter(transaction => transaction.value > 0)
              .reverse()
              .map(transaction => (
                <HStack justifyContent="space-between" mb={4}>
                  <VStack>
                    <HStack alignItems="center">
                      <Box
                        rounded="full"
                        bg={`${GRAPH_COLORS[data.indexOf(transaction)]}.400`}
                        mr={2}
                        w={4}
                        h={4}
                      />
                      <Text fontWeight="bold" fontSize="lg">
                        {transaction.transaxtionId}
                      </Text>
                    </HStack>
                    <Text color="gray.400">{`$${transaction.value} - ${new Date(
                      transaction.date,
                    ).toLocaleDateString()}`}</Text>
                  </VStack>
                  <Button variant="ghost">See more</Button>
                </HStack>
              ))}
          </ScrollView>
        </Box>
      </Box>

      <Image
        source={require('../../components/container/assets/1.jpg')}
        alt="history pattern image"
        resizeMode="repeat"
        borderTopLeftRadius="8xl"
        height="1/4"
        width="100%"
      />
    </VStack>
  );
};
