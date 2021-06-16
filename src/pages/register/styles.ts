import styled from "styled-components/native";

const SafeAreaViewStyled = styled.SafeAreaView`
    flex: 1;
`;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ContainerTitle = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 25%;
`;

const TitleRegister = styled.Text`
    font-family: ${(prosp) => prosp.theme.fonts.Primary};
    font-size: 20px;
    color: ${(prosp) => prosp.theme.colors.White};
`;

const ContainerRegister = styled.View`
    flex: 1;
    margin-top: 3%;
    justify-content: flex-start;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    width: 85%;
    height: 40px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
`;

const ButtonGoogle = styled(Button)`
    background-color: #dfdfdf;
    flex-direction: row;
    margin-bottom: 5px;
`;

const ImageGoogle = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

const TextButtonGoogle = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    font-size: 15px;
    color: ${(props) => props.theme.colors.Black};
`;

// ########################## Input
const InputRegister = styled.TextInput`
    margin-top: 10px;
    width: 85%;
    height: 43px;
    border-width: 0.5px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #c6c6c6;
    font-size: 15px;
    font-family: ${(props) => props.theme.fonts.Secondary};
    padding-left: 10px;
`;
// ########################## End

const ButtonRegister = styled(Button)`
    background-color: ${(props) => props.theme.colors.Primary};
    margin-top: 30px;
`;

const TextButtonRegister = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    font-size: 18px;
    color: ${(props) => props.theme.colors.White};
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
    InputRegister,
    ButtonRegister,
    TextButtonRegister,
};
