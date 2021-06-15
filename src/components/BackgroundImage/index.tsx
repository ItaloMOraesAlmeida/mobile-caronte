import React from "react";
import { Dimensions, ImageBackground } from "react-native";

import backgroundLandingPage from "../../assets/images/backgroundLandingPage.png";

interface Props {
    children: React.ReactNode;
}

const BackgroundImage: React.FC<Props> = ({ children }: Props) => (
    <ImageBackground
        source={backgroundLandingPage}
        style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}
    >
        {children}
    </ImageBackground>
);

export default BackgroundImage;
