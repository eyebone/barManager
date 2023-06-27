// 这是主界面

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import EmojiPicker from "../components/EmojiPicker";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import CircleButton from "../components/circleButton";
import IconButton from "../components/IconButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Pressable , ScrollView} from "react-native";
import { NavigationBar } from "../components/NavigationBar";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const img = require('../assets/bar/1.jpg');

export function MainView({ navigation }) {
  return (
    <ScrollView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <Text>Main Screen</Text>
      </LinearGradient>

      <View style={styles.content}>{/* Your content goes here */}</View>

      <View style={styles.navigationBarContainer}>
        <NavigationBar navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: 20,
  },
  navigationBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});