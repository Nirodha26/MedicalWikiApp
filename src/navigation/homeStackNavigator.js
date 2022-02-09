import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

// Screens
import Home from '../screens/Home';

// Images
import {logo} from '../resources/images';

const Stack = createStackNavigator();

function LogoTitle() {
  return <Image style={styles.image} source={logo} />;
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: styles.header,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  header: {
    backgroundColor: '#93A3EE',
    height: 80,
  },
});

export default HomeStackNavigator;
