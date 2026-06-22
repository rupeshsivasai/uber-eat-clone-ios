import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderTab from '../components/HeaderTabs';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderTab/>
    </SafeAreaView>
  );
}