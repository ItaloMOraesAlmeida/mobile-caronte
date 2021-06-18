import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import BackgroundImage from "../../components/BackgroundImage";

import backgroundRegisterPage from "../../assets/images/backgroundRegisterPage.png";
import googleImage from "../../assets/images/google.png";

import {
    SafeAreaViewStyled,
    Container,
    ContainerTitle,
    TitleRegister,
    ContainerRegister,
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
    ButtonRegister,
    TextButtonRegister,
} from "./styles";

const RegisterPage = () => {
    const [eyeOff, setEyeOff] = useState(false);

    return (
        <SafeAreaViewStyled>
            <BackgroundImage image={backgroundRegisterPage}>
                <Container>
                    <ContainerTitle>
                        <TitleRegister>CRIE SUA CONTA</TitleRegister>
                    </ContainerTitle>
                    <ContainerRegister>
                        <ButtonGoogle onPress={() => {}}>
                            <ImageGoogle source={googleImage} />
                            <TextButtonGoogle>
                                Crie com o Google
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
                                placeholder="Nome"
                                underlineColorAndroid="transparent"
                            />
                        </ContainerInput>
                        <ContainerInput>
                            <IconInput name="mail" size={20} />
                            <Input
                                placeholder="Email"
                                underlineColorAndroid="transparent"
                                keyboardType="email-address"
                                autoCapitalize="none"
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
                        <ButtonRegister onPress={() => {}}>
                            <TextButtonRegister>Criar</TextButtonRegister>
                        </ButtonRegister>
                    </ContainerRegister>
                </Container>
            </BackgroundImage>
        </SafeAreaViewStyled>
    );
};

export default RegisterPage;
