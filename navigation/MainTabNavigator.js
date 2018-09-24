import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserHomeScreen from '../screens/UserHomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen'; 
import MyExercisesScreen from '../screens/MyExercisesScreen';
import Sets from '../screens/Sets';
import SetTracking from '../screens/SetTracking';
import SignUpScreen from '../screens/SignUpScreen';
import ExerciseEditor from '../screens/ExerciseEditor'
import MyWorkouts from '../screens/MyWorkouts';
import WorkoutDetails from '../screens/WorkoutDetails';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  UserHome: UserHomeScreen,
  Workout: WorkoutScreen,
  MyExercises: MyExercisesScreen,
  MySets: Sets,
  SetTracking: SetTracking,
  SignUp: SignUpScreen,
  ExerciseEditor: ExerciseEditor,
  MyWorkouts: MyWorkouts,
  WorkoutDetails: WorkoutDetails
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
