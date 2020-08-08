import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react'
import Header from '../shared/header';
const screens = {
    
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='About GameZone' navigation={navigation} />
            }
          },
    }    
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { 
            backgroundColor: '#eee', 
            height: 60,
            headerTintColor: '#444'
        }
    }
});

export default AboutStack;