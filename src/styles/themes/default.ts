import { DefaultTheme } from "styled-components";
import { Dimensions } from "react-native";

const defaultTheme: DefaultTheme = {
    colors: {
        Primary: "#C23D5D",
        Secondary: "#DEC90B",
        White: "#F5F5F5",
        Black: "#333333",
    },
    fonts: {
        Primary: "FredokaOne_400Regular",
        Secondary: "VarelaRound_400Regular",
    },
    dimensions: {
        screen: {
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        },
        window: {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
        },
    },
};

export default defaultTheme;
