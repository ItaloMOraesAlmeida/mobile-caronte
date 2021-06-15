/* eslint-disable camelcase */

import React from "react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";
import { VarelaRound_400Regular } from "@expo-google-fonts/varela-round";

import store from "./store";

import Routes from "./routes";

const App = () => {
    const [fontsLoaded] = useFonts({
        FredokaOne_400Regular,
        VarelaRound_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

export default App;
