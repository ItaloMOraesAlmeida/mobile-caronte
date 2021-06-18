import React from "react";
import { View } from "react-native";

import BackgroundImage from "../../components/BackgroundImage";

import backgroundAccessPage from "../../assets/images/backgroundAccessPage.png";

import {
    Container,
    ContainerTitle,
    TitleCaronte,
    ContainerSubtitle,
    SubtitleCaronte,
    MessageSubtitleCaronte,
    ContainerButtons,
    ButtonAccess,
    TextButtonAccess,
    ButtonRegister,
    TextButtonRegister,
} from "./styles";

const AccessPage = ({ navigation }: { navigation: any }) => (
    <BackgroundImage image={backgroundAccessPage}>
        <Container>
            <ContainerTitle>
                <TitleCaronte>Caronte</TitleCaronte>
            </ContainerTitle>
            <View>
                <ContainerSubtitle>
                    <SubtitleCaronte>Gerencie empréstimos</SubtitleCaronte>
                    <MessageSubtitleCaronte>
                        Com o Caronte, você tem um melhor controle de seus
                        empréstimos.
                    </MessageSubtitleCaronte>
                </ContainerSubtitle>
                <ContainerButtons
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    <ButtonAccess onPress={() => navigation.navigate("login")}>
                        <TextButtonAccess>Acessar</TextButtonAccess>
                    </ButtonAccess>
                    <ButtonRegister
                        onPress={() => navigation.navigate("register")}
                    >
                        <TextButtonRegister>Registre-se</TextButtonRegister>
                    </ButtonRegister>
                </ContainerButtons>
            </View>
        </Container>
    </BackgroundImage>
);

export default AccessPage;
