import React from "react";
import { Dimensions, ImageBackground, ImageSourcePropType } from "react-native";

interface Props {
    image: ImageSourcePropType;
    children: React.ReactNode;
}

const BackgroundImage: React.FC<Props> = ({ image, children }: Props) => (
    <ImageBackground
        source={image}
        style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height,
        }}
    >
        {children}
    </ImageBackground>
);

export default BackgroundImage;
