import styled from "styled-components/native";
import { Dimensions, PixelRatio } from "react-native";

const widthPercentageToDP = (widthPercent: string) => {
    const screenWidth = Dimensions.get("window").width;
    return PixelRatio.roundToNearestPixel(
        (screenWidth * parseFloat(widthPercent)) / 100
    );
};

const heightPercentageToDP = (heightPercent: string) => {
    const screenHeight = Dimensions.get("window").height;
    return PixelRatio.roundToNearestPixel(
        (screenHeight * parseFloat(heightPercent)) / 100
    );
};

const Container = styled.ImageBackground`
    flex: 1;
    width: ${widthPercentageToDP("100%")}px;
    height: ${heightPercentageToDP("100%")}px;
`;

export { Container };
