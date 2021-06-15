/* eslint-disable camelcase */

import React from "react";
import { useFonts } from "expo-font";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";
import { VarelaRound_400Regular } from "@expo-google-fonts/varela-round";

import Routes from "./routes";

const App = () => {
    const [fontsLoaded] = useFonts({
        FredokaOne_400Regular,
        VarelaRound_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Routes />;
};

export default App;
