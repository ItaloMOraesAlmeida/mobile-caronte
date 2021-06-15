import styled from "styled-components/native";
import { Dimensions } from "react-native";

const dimensionScreen = Dimensions.get("screen");

const Container = styled.ImageBackground`
    width: ${dimensionScreen.width};
    height: ${dimensionScreen.height};
`;

export { Container };
