import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SearchScreen';
import FollowingScreen from '../screens/FollowingScreen';

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-settings${focused ? '' : '-outline'}` : 'md-settings'}
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  ),
};

const FollowingStack = createStackNavigator({
  Following: FollowingScreen,
});

FollowingStack.navigationOptions = {
  tabBarLabel: 'Following',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contacts${focused ? '' : '-outline'}`
          : 'md-contacts'
      }
    />
  ),
};

var bottomTabNav = createBottomTabNavigator({
  SettingsStack,
  SearchStack,
  FollowingStack
});

export default createStackNavigator({
  Home: HomeScreen,
  Signin: SigninScreen,
  Signup: SignupScreen,
  Nav: bottomTabNav
},
);
