import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../pages/home";
import LandingPage from "../pages/landing";

const Routes = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="landing"
                    options={{ headerShown: false }}
                    component={LandingPage}
                />
                <Screen name="home" component={HomePage} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Routes;
