import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTab from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTab />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}