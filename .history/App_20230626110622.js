// In App.js in a new project

import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
// import React-native from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewOne } from "./view/ViewOne";
import { SignView } from "./view/Sign";
//
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("test")}
      />
      <Button title="Go to Sign" onPress={() => navigation.navigate("sign")} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="test" component={ViewOne} />
        <Stack.Screen name="sign" component={SignView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    //    alignItems: 'center',
  },
});
