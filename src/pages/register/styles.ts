import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const SafeAreaViewStyled = styled.SafeAreaView`
    flex: 1;
`;

const Container = styled.View`
    flex: 1;
    justify-content: space-around;
    align-items: center;
`;

const ContainerTitle = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TitleRegister = styled.Text`
    font-family: ${(prosp) => prosp.theme.fonts.Primary};
    color: ${(prosp) => prosp.theme.colors.White};
    font-size: 20px;
    margin-top: 25%;
`;

const ContainerRegister = styled.View`
    flex: 1;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
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
    width: 40%;
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

const ButtonEye = styled.TouchableOpacity``;

const Input = styled.TextInput`
    font-family: ${(props) => props.theme.fonts.Secondary};
    font-size: 16px;
    margin-left: 10px;
    margin-right: 15px;
    width: 70%;
`;

const ButtonRegister = styled(Button)`
    background-color: ${(props) => props.theme.colors.Primary};
    margin-top: 15px;
`;

const TextButtonRegister = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 18px;
`;

export {
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
};
