import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../pages/home";
import AccessPage from "../pages/access";
import LandingPage from "../pages/landing";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ResetPasswordPage from "../pages/resetPassword";

const Routes = () => {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="landing" component={LandingPage} />
                <Screen name="access" component={AccessPage} />
                <Screen name="login" component={LoginPage} />
                <Screen name="resetPassword" component={ResetPasswordPage} />
                <Screen name="register" component={RegisterPage} />
                <Screen name="home" component={HomePage} />
            </Navigator>
        </NavigationContainer>
    );
};

export default Routes;
