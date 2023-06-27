// In App.js in a new project

import * as React from "react";
import { Button, View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewOne } from "./view/ViewOne";
import { SignView } from "./view/Sign";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { MainView } from "./view/Main";
// import { NavigationBar } from "./components/NavigationBar";

function MainView({ navigation }) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
      style={styles.linearGradient}
    >
      <Text>Main Screen</Text>

      <NavigationBar navigation={navigation} />
    </LinearGradient>
  );
}

function NavigationBar({ navigation }) {
  return (
    <View style={styles.bar}>
      <Pressable
        style={{ marginLeft: 20, marginTop: 12 }}
        onPress={() => {
          alert("you pressed nav button");
          navigation.push("Home");
        }}
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

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#5c0b82", "#480965", "#190641", "#070320", "#000000"]}
        style={styles.linearGradient}
      >
        <Text>Home Screen</Text>
        <Pressable
          style={(styles.button, { backgroundColor: "#faf2de" })}
          onPress={() => navigation.push("test")}
        >
          <FontAwesome name="home" size={26} style={{ paddingRight: 8 }} />
          <Text>go to detail</Text>
        </Pressable>

        <Button
          title="Go to Sign"
          onPress={() => navigation.navigate("sign")}
        />
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Overview", backgroundColor: "transparent" }}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="test" component={ViewOne} />
        <Stack.Screen
          name="sign"
          component={SignView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
  mainlinearGradient: {
    height: 825,
  },
  bar: {
    width: 380,
    height: 65,
    backgroundColor: "#C8BFDB",
    marginTop: 674,
    flexDirection: "row",
  },
});
