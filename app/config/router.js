// import { StackNavigator } from 'react-navigation';
// import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { capitalizeFirstLetter } from '../helpers/string';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Notifications"
                onPress={() => navigation.navigate('Notifications')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

function DetailsScreen({ route, navigation }) {
    /* Get the param */
    const { currContact } = route.params;
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{currContact.name.first}</Text>
    </View>);
}
const Stack = createStackNavigator();

export default function MyStack() {
    return (
        // <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Home" component={Contacts} />
            {/* <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />\
            `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
            <Stack.Screen name="Details" component={DetailsScreen} /> */}
            {/* <Stack.Screen name="Details" component={Details} options={({ route }) => ({ title: (route.params.currContact.name.first) })} /> */}
            <Stack.Screen name="Details" component={Details} options={({ route }) => ({ headerTitle: `${capitalizeFirstLetter(route.params.currContact.name.first)} ${capitalizeFirstLetter(route.params.currContact.name.last)}` })} />
        </Stack.Navigator>
    );
}