/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const SafeAreaViewStyled = styled.SafeAreaView`
    flex: 1;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ContainerTitle = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 23px;
`;

const ContainerCard = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${(prosp) => prosp.theme.colors.White};
    width: 90%;
    padding: 10px;
    border-radius: 10px;
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

const Input = styled.TextInput`
    font-family: ${(props) => props.theme.fonts.Secondary};
    font-size: 16px;
    margin-left: 10px;
    margin-right: 15px;
    width: 70%;
`;

const ButtonEye = styled.TouchableOpacity``;

const Button = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.Primary};
    width: 100%;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;

const TitleButton = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 18px;
`;

const ContainerCardCode = styled.View`
    background-color: ${(props) => props.theme.colors.White};
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 10px;
    border-radius: 10px;
`;

const ContainerCode = styled.View`
    flex-direction: row;
`;

const ContainerButtonCode = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
`;

interface IPropsButtonCodeValidation {
    color?: string;
}

const ButtonCodeValidation = styled(Button)<IPropsButtonCodeValidation>`
    background-color: ${(props) =>
        props.color ? "#3963eb" : props.theme.colors.Primary};
    width: 47%;
`;

const ContainerInputCode = styled.View`
    background-color: white;
    margin: 8px;
    width: 50px;
    height: 70px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    border-width: 0.5px;
    border-color: #bababa;
`;

const InputCode = styled.TextInput`
    font-family: ${(props) => props.theme.fonts.Secondary};
    font-size: 40px;
`;

export {
    SafeAreaViewStyled,
    Container,
    ContainerTitle,
    Title,
    ContainerCard,
    ContainerInput,
    IconInput,
    Input,
    ButtonEye,
    Button,
    TitleButton,
    ContainerCardCode,
    ContainerCode,
    ContainerButtonCode,
    ButtonCodeValidation,
    ContainerInputCode,
    InputCode,
};
