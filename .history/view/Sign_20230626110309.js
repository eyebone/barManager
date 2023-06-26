import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
const PlaceholderImage = require("../assets/images/background-image.png");
import * as React from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  PixelRatio,
  TextInput,
} from "react-native";

//import {Text } from 'react-native';

export function SignView() {
  const [value, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      {/* <Image source={require("../assets/bar/Back.png")} /> */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText} numberOfLines={1}>
          欢迎
        </Text>
        <Text style={styles.infoText}>请输入信息以完成注册</Text>
      </View>
      <View style={styles.inputBar}>
        <Text style={styles.smallText}>用户名</Text>
        <TextInput
          maxLength={40}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.input}
          placeholder="请输入用户名"
          //          onChangeText={onChange}
        />
      </View>
      <View style={styles.inputBar}>
        <Text style={styles.smallText}>密码</Text>
        <TextInput
          style={styles.input}
          placeholder="请输入密码"
          //          onChangeText={onChange}
        />
      </View>
      <View style={styles.inputBar}>
        <Text editable style={styles.smallText}>
          用户名
        </Text>
        <TextInput
          style={styles.input}
          placeholder="请输入用户名"
          //          onChangeText={onChange}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.regText}>注册</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    //    alignItems: 'center',
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 114,
    height: 60,
  },
  welcomeText: {
    fontSize: PixelRatio.getFontScale() * 30,
    //    fontFamily: STKaiti,
  },
  infoText: {
    color: "#aaa",
    fontSize: PixelRatio.getFontScale() * 15,
    lineHeight: 38,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  smallText: {
    fontSize: PixelRatio.getFontScale() * 15,
    color: "#aaa",
    marginLeft: 20,
  },
  footerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#500B82",
    width: 380,
    height: 57,
    bottom: 0,
    //      marginTop: 600,
    //      paddingTop: 737,
  },
  inputBar: {
    flex: 2,
    // borderBottomColor: "#000",
    // borderBottomWidth: 1,
  },
  regText: {
    fontSize: PixelRatio.getFontScale() * 24,
    color: "#fff",
    margin: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 320,
  },
});
