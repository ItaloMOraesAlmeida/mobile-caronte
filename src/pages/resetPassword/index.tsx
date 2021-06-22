import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import BackgroundImage from "../../components/BackgroundImage";

import backgroundAccessPage from "../../assets/images/backgroundAccessPage.png";

import {
    SafeAreaViewStyled,
    Container,
    ContainerTitle,
    Title,
    ContainerCard,
    ContainerInput,
    IconInput,
    Input,
    Button,
    TitleButton,
    ButtonEye,
    ContainerCardCode,
    ContainerCode,
    ContainerButtonCode,
    ButtonCodeValidation,
    ContainerInputCode,
    InputCode,
} from "./styles";

const ResetPasswordPage = () => {
    const [eyeOff, setEyeOff] = useState(false);

    return (
        <SafeAreaViewStyled>
            <BackgroundImage image={backgroundAccessPage}>
                <Container>
                    <ContainerTitle>
                        <Title>Recuperação de Senha</Title>
                    </ContainerTitle>
                    <ContainerCard>
                        <ContainerInput>
                            <IconInput name="mail" size={20} />
                            <Input
                                placeholder="Email"
                                underlineColorAndroid="transparent"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </ContainerInput>
                        <Button>
                            <TitleButton>Enviar</TitleButton>
                        </Button>
                    </ContainerCard>
                    <ContainerCardCode>
                        <ContainerCode>
                            <ContainerInputCode>
                                <InputCode
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    maxLength={1}
                                />
                            </ContainerInputCode>
                            <ContainerInputCode>
                                <InputCode
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    maxLength={1}
                                />
                            </ContainerInputCode>
                            <ContainerInputCode>
                                <InputCode
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    maxLength={1}
                                />
                            </ContainerInputCode>
                            <ContainerInputCode>
                                <InputCode
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                    autoCapitalize="none"
                                    maxLength={1}
                                />
                            </ContainerInputCode>
                        </ContainerCode>
                        <ContainerButtonCode>
                            <ButtonCodeValidation color="secondary">
                                <TitleButton>Novo Código</TitleButton>
                            </ButtonCodeValidation>
                            <ButtonCodeValidation>
                                <TitleButton>Validar</TitleButton>
                            </ButtonCodeValidation>
                        </ContainerButtonCode>
                    </ContainerCardCode>
                    <ContainerCard>
                        <ContainerInput>
                            <IconInput name="lock" size={20} />
                            <Input
                                placeholder="Nova Senha"
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
                        <ContainerInput>
                            <IconInput name="lock" size={20} />
                            <Input
                                placeholder="Confirme a senha"
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
                        <Button>
                            <TitleButton>Salvar Senha</TitleButton>
                        </Button>
                    </ContainerCard>
                </Container>
            </BackgroundImage>
        </SafeAreaViewStyled>
    );
};

export default ResetPasswordPage;
