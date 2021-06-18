import React from "react";
import { ImageSourcePropType } from "react-native";

import { Container } from "./styles";

interface Props {
    image: ImageSourcePropType;
    children: React.ReactNode;
}

const BackgroundImage: React.FC<Props> = ({ image, children }: Props) => (
    <Container source={image}>{children}</Container>
);

export default BackgroundImage;
