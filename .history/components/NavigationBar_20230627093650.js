//这是底部导航栏
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
const PlaceholderImage = require("../assets/images/background-image.png");
import * as React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  PixelRatio,
  TextInput,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import CircleButton from "./circleButton";
export function NavigationBar({ navigation }) {
  return (
    <View style={styles.bar}>
      <Pressable
        style={{ marginLeft: 20, marginTop: 12 }}
        onPress={() => navigation.push("Main")}
      >
        <FontAwesome name="home" size={34}></FontAwesome>
      </Pressable>
      <Pressable>
        <FontAwesome
          name="heart"
          size={34}
          style={{ marginLeft: 120, marginTop: 12 }}
        ></FontAwesome>
      </Pressable>
      {/* <CircleButton /> */}
      <Pressable>
        <FontAwesome
          name="cog"
          size={34}
          style={{ marginLeft: 120, marginTop: 12 }}
        ></FontAwesome>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: 380,
    height: 65,
    backgroundColor: "#C8BFDB",
    marginTop: 674,
    flexDirection: "row",
  },
});
