import * as React from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Appbar, FAB, useTheme, Button } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAsyncStorage from '../utils/useAsyncStorage';
import { Barcode } from 'expo-barcode-generator';

export default function HomeScreen() {
  const {
    setItem,
    getItem,
    removeItem,
    mergeItem,
    clear,
    getAllKeys,
    getAllItems,
  } = useAsyncStorage();

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const { bottom } = useSafeAreaInsets();
const theme = useTheme();

  const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});
  return (
    <View>
      <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Title" />
          <Appbar.Action icon="calendar" onPress={() => {}} />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
      <View style={{margin: 10}}>   
        <Card >
          <Card.Content>
            <Text variant="titleLarge">Pick n Pay</Text>
            <Text variant="bodyMedium">Smart Shopper</Text>
            <View style={{width: 333}}>
            <Barcode
              value="7353280306841921"
              options={{ format: 'MSI1110', background: 'white' }}
            /></View>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
      </Card>
    </View> 
  </View>
  );
}


