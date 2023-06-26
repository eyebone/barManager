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

import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export function MainView({navigation}){
    return(
        
    )
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
