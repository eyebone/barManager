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
import { Text, Pressable } from "react-native";
import { NavigationBar } from "../components/NavigationBar";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export function MainView({ navigation }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
      style={styles.linearGradient}
    >
      <Text>Main Screen</Text>
      <Pressable
        style={(styles.button, { backgroundColor: "#faf2de" })}
        onPress={() => navigation.push("Home")}
      >
        <FontAwesome name="home" size={26} style={{ paddingRight: 8 }} />
        <Text>go to detail</Text>
      </Pressable>

      <Text style={styles.buttonText}>Sign in with Facebook</Text>
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000",
    //    alignItems: 'center',
  },
  linearGradient: {
    height: 740,
  },
  button: {
    borderRadius: 10,
    width: 300,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
