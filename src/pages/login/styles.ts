import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const SafeAreaViewStyled = styled.SafeAreaView`
    flex: 1;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

const ContainerImageLogin = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
`;

const ImageLogin = styled.Image`
    width: 270px;
    height: 230px;
`;

const ContainerTitleLogin = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
`;

const TitleLogin = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 25px;
`;

const SubtitleLogin = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.White};
    font-size: 14px;
    margin-top: 3px;
    opacity: 0.8;
`;

const ContainerAccess = styled.View`
    align-items: center;
    padding: 15px;
    background-color: ${(props) => props.theme.colors.White};
    border-radius: 15px;
`;

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

const ButtonGoogle = styled(Button)`
    background-color: #dfdfdf;
    flex-direction: row;
`;

const ImageGoogle = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

const TextButtonGoogle = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 15px;
    margin-right: 12%;
`;

const ContainerDivider = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
`;

const Divider = styled.View`
    border-width: 0.5px;
    border-color: #9d9d9d;
    width: 35%;
`;

const DividerLeft = styled(Divider)`
    margin-right: 10px;
`;

const TextDivider = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: #9d9d9d;
    font-size: 13px;
`;

const DividerRight = styled(Divider)`
    margin-left: 10px;
`;

const ContainerInput = styled.View`
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    border-width: 0.5px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #c6c6c6;
    width: 100%;
    height: 45px;
    margin-bottom: 5px;
`;

const IconInput = styled(Feather)`
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

const ButtonEye = styled.TouchableOpacity`
    margin-left: -20px;
`;

const Input = styled.TextInput`
    font-family: ${(props) => props.theme.fonts.Secondary};
    font-size: 16px;
    margin-left: 10px;
    margin-right: 15px;
    width: 70%;
`;

const ButtonAccess = styled(Button)`
    width: 275px;
    background-color: ${(props) => props.theme.colors.Primary};
    margin-top: 15px;
`;

const TextButtonAccess = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 18px;
`;

const ContainerResetPassword = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
`;

const TitleResetPassword = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    margin-right: 3px;
`;

const TitleLinkResetPassword = styled(TitleResetPassword)`
    color: ${(props) => props.theme.colors.Primary};
    text-decoration: underline;
`;

export {
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
};
