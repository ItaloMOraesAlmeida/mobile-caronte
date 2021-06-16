import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import BackgroundImage from "../../components/BackgroundImage";

import backgroundRegisterPage from "../../assets/images/backgroundRegisterPage.png";
// import googleImage from "../../assets/images/google.png";

import {
    SafeAreaViewStyled,
    Container,
    // ContainerTitle,
    // TitleRegister,
    // ContainerRegister,
    // ButtonGoogle,
    // TextButtonGoogle,
    // ImageGoogle,
    // InputRegister,
    // ButtonRegister,
    // TextButtonRegister,
} from "./styles";

const RegisterPage = () => (
    // <BackgroundImage image={backgroundRegisterPage}>
    //     <Container>
    //         <ContainerTitle>
    //             <TitleRegister>CRIE SUA CONTA</TitleRegister>
    //         </ContainerTitle>
    //         <ContainerRegister>
    //             <ButtonGoogle onPress={() => {}}>
    //                 <ImageGoogle source={googleImage} />
    //                 <TextButtonGoogle>Criar com o Google</TextButtonGoogle>
    //             </ButtonGoogle>
    //             <InputRegister placeholder="Nome" />
    //             <InputRegister
    //                 placeholder="E-mail"
    //                 autoCapitalize="none"
    //                 keyboardType="email-address"
    //             />
    //             <InputRegister
    //                 placeholder="Senha"
    //                 autoCapitalize="none"
    //                 secureTextEntry
    //             />
    //             <ButtonRegister onPress={() => {}}>
    //                 <TextButtonRegister>Criar</TextButtonRegister>
    //             </ButtonRegister>
    //         </ContainerRegister>
    //     </Container>
    // </BackgroundImage>
    <SafeAreaViewStyled>
        <BackgroundImage image={backgroundRegisterPage}>
            <Container>
                <View>
                    <Text>Titulo</Text>
                </View>
                <View>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <Feather name="facebook" size={20} />
                            <Text>Titulo</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Divider</Text>
                    </View>
                    <View>
                        <View>
                            <Feather name="user" size={20} />
                            <TextInput
                                placeholder="Nome"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View>
                            <Feather name="mail" size={20} />
                            <TextInput
                                placeholder="Email"
                                underlineColorAndroid="transparent"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                        <View>
                            <Feather name="lock" size={20} />
                            <TextInput
                                placeholder="Senha"
                                underlineColorAndroid="transparent"
                                secureTextEntry
                                autoCapitalize="none"
                            />
                            <Feather name="eye-off" size={20} />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {}}>
                            <Text>Titulo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        </BackgroundImage>
    </SafeAreaViewStyled>
);

export default RegisterPage;
