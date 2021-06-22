import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import BackgroundImage from "../../components/BackgroundImage";
import backgroundLandingPage from "../../assets/images/backgroundLandingPage.png";
import loginImage from "../../assets/images/loginImage.png";
import googleImage from "../../assets/images/google.png";

import {
    SafeAreaViewStyled,
    Container,
    ContainerImageLogin,
    ImageLogin,
    ContainerTitleLogin,
    TitleLogin,
    SubtitleLogin,
    ContainerAccess,
    ButtonGoogle,
    ImageGoogle,
    TextButtonGoogle,
    ContainerDivider,
    DividerLeft,
    TextDivider,
    DividerRight,
    ContainerInput,
    IconInput,
    ButtonEye,
    Input,
    ButtonAccess,
    TextButtonAccess,
    ContainerResetPassword,
    TitleResetPassword,
    TitleLinkResetPassword,
} from "./styles";

const LoginPage = ({ navigation }: { navigation: any }) => {
    const [eyeOff, setEyeOff] = useState(false);

    return (
        <SafeAreaViewStyled>
            <BackgroundImage image={backgroundLandingPage}>
                <Container>
                    <ContainerImageLogin>
                        <ImageLogin source={loginImage} />
                    </ContainerImageLogin>
                    <ContainerTitleLogin>
                        <TitleLogin>Bem vindo(a) ao Caronte</TitleLogin>
                        <SubtitleLogin>Controle seus pertences</SubtitleLogin>
                    </ContainerTitleLogin>
                    <ContainerAccess>
                        <ButtonGoogle onPress={() => {}}>
                            <ImageGoogle source={googleImage} />
                            <TextButtonGoogle>
                                Acessar com o Google
                            </TextButtonGoogle>
                        </ButtonGoogle>
                        <ContainerDivider>
                            <DividerLeft />
                            <TextDivider>Ou</TextDivider>
                            <DividerRight />
                        </ContainerDivider>
                        <ContainerInput>
                            <IconInput name="user" size={20} />
                            <Input
                                placeholder="Usuário"
                                underlineColorAndroid="transparent"
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <IconInput name="lock" size={20} />
                            <Input
                                placeholder="Senha"
                                underlineColorAndroid="transparent"
                                secureTextEntry={!eyeOff}
                                autoCapitalize="none"
                            />
                            <ButtonEye
                                onPress={() => {
                                    setEyeOff(!eyeOff);
                                }}
                            >
                                <Feather
                                    name={eyeOff ? "eye" : "eye-off"}
                                    size={20}
                                />
                            </ButtonEye>
                        </ContainerInput>
                        <ButtonAccess
                            onPress={() => {
                                navigation.navigate("home");
                            }}
                        >
                            <TextButtonAccess>Entrar</TextButtonAccess>
                        </ButtonAccess>
                        <ContainerResetPassword>
                            <TitleResetPassword>
                                Esqueceu a senha?
                            </TitleResetPassword>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("resetPassword");
                                }}
                            >
                                <TitleLinkResetPassword>
                                    Clique aqui!
                                </TitleLinkResetPassword>
                            </TouchableOpacity>
                        </ContainerResetPassword>
                    </ContainerAccess>
                </Container>
            </BackgroundImage>
        </SafeAreaViewStyled>
    );
};

export default LoginPage;
