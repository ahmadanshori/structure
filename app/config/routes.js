import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import {useSelector} from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import CourierScreen from '../screens/CourierScreen';
import OrderScreen from '../screens/OrderScreen';

const styles = StyleSheet.create({
  image: {
    height: 24,
    width: 24,
  },
});

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      //   screenOptions={{headerShown: false}}
      tabBarOptions={{
        activeTintColor: EStyleSheet.value('$orange'),
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
          fontFamily: 'OpenSans-Regular',
        },
        style: {
          paddingTop: 4,
        },
      }}
      style={{
        shadowColor: 'rgba(0,0,0, 0.33)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 20,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          //   header: 'none',
          tabBarIcon: ({color}) => {
            return color === 'gray' ? (
              <Image
                source={require('../assets/images/Navbar-Bottom-Icons/grey-home.png')}
                style={styles.image}
              />
            ) : (
              <Image
                source={require('../assets/images/Navbar-Bottom-Icons/orange-home.png')}
                style={styles.image}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarLabel: 'Order',
          //   headerMode: 'Order',
          tabBarIcon: ({color}) => {
            return (
              <>
                {color === 'gray' ? (
                  <Image
                    source={require('../assets/images/Navbar-Bottom-Icons/grey-order.png')}
                    style={styles.image}
                  />
                ) : (
                  <Image
                    source={require('../assets/images/Navbar-Bottom-Icons/orange-order.png')}
                    style={styles.image}
                  />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Courier"
        component={CourierScreen}
        options={{
          tabBarLabel: 'Kurir',
          tabBarIcon: ({color}) => {
            return (
              <>
                {color === 'gray' ? (
                  <Image
                    source={require('../assets/images/Navbar-Bottom-Icons/grey-driver.png')}
                    style={styles.image}
                  />
                ) : (
                  <Image
                    source={require('../assets/images/Navbar-Bottom-Icons/orange-driver.png')}
                    style={styles.image}
                  />
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: 'center',
          //   headerShown: false,
          //   headerStyle: {
          //     fontFamily: 'OpenSans-Bold',
          //   },
        }}>
        <Stack.Screen
          component={TabNavigator}
          name="Home"
          //   options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
