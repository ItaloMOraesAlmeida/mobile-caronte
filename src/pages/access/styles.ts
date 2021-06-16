import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: flex-start;
`;

const ContainerTitle = styled.View`
    margin-left: 20px;
`;

const TitleCaronte = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    font-size: 25px;
    color: ${(props) => props.theme.colors.White};
    margin-bottom: 100%;
`;

const ContainerSubtitle = styled(ContainerTitle)`
    margin-bottom: 20px;
`;

const SubtitleCaronte = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    font-size: 20px;
    color: ${(props) => props.theme.colors.White};
    margin-bottom: 3px;
`;

const MessageSubtitleCaronte = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    font-size: 15px;
    color: ${(props) => props.theme.colors.White};
    opacity: 0.8;
`;

const ContainerButtons = styled.View`
    justify-content: center;
    align-items: center;
`;

const Button = styled.TouchableOpacity`
    width: 329px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;

const TextButton = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    font-size: 15px;
`;

const ButtonAccess = styled(Button)`
    background-color: ${(props) => props.theme.colors.White};
    margin-bottom: 15px;
`;

const TextButtonAccess = styled(TextButton)`
    color: ${(props) => props.theme.colors.Primary};
`;

const ButtonRegister = styled(Button)`
    border-width: 0.7px;
    border-color: ${(props) => props.theme.colors.White};
`;

const TextButtonRegister = styled(TextButton)`
    color: ${(props) => props.theme.colors.White};
`;

export {
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
};
