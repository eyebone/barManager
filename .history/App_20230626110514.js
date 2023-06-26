// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ViewOne } from './view/ViewOne';
import { SignView } from './view/Sign';
//
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('test')}
      />
      <Button
              title="Go to Sign"
              onPress={() => navigation.navigate('sign')}
            />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
        component={HomeScreen} />
         <Stack.Screen name="test"
          component={ViewOne} />
          <Stack.Screen name="sign"
                    component={SignView} />
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
