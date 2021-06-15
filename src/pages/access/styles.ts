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
    font-family: FredokaOne_400Regular;
    font-size: 25px;
    color: #dedede;
    margin-bottom: 100%;
`;

const ContainerSubtitle = styled(ContainerTitle)`
    margin-bottom: 20px;
`;

const SubtitleCaronte = styled.Text`
    font-family: FredokaOne_400Regular;
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 3px;
`;

const MessageSubtitleCaronte = styled.Text`
    font-family: VarelaRound_400Regular;
    font-size: 15px;
    color: #dedede;
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
    font-family: FredokaOne_400Regular;
    font-size: 15px;
`;

const ButtonAccess = styled(Button)`
    background-color: #f5f5f5;
    margin-bottom: 15px;
`;

const TextButtonAccess = styled(TextButton)`
    color: #c23d5d;
`;

const ButtonRegister = styled(Button)`
    border-width: 0.7px;
    border-color: #f5f5f5;
`;

const TextButtonRegister = styled(TextButton)`
    color: #f5f5f5;
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
