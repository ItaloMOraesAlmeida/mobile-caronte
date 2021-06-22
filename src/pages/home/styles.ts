import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const Container = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15%;
`;

const ContainerTitlePresentation = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 4%;
    margin-left: 10%;
`;

const TitlePresentation = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 18px;
`;

const SubtitlePresentation = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 14px;
`;

const ContainerLoanWait = styled.View`
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.Primary};
    width: 90%;
    height: 20%;
    border-radius: 10px;
    padding: 10px;
`;

const ImageLoanWait = styled.Image`
    width: 76px;
    height: 76px;
`;

const TitleLoanWait = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 20px;
`;

const ContainerItemsLoan = styled.View`
    width: 90%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 5%;
`;

const ContainerSelectItemsLoan = styled.View`
    background-color: ${(props) => props.theme.colors.Primary};
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    width: 100px;
    height: 120px;
    border-radius: 10px;
`;

const ImageSelectItemLoan = styled.Image`
    width: 48px;
    height: 48px;
`;

const TitleSelectItemLoan = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 13px;
`;

const ContainerTitleLoanAvailable = styled.View`
    width: 90%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 5%;
`;

const TitleLoanAvailable = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 18px;
`;

const TitleButtonAvailable = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.Black};
    opacity: 0.8;
    text-decoration: underline;
    font-size: 13px;
`;

const ContainerTitleFriends = styled(ContainerTitleLoanAvailable)``;

const TitleLoanFriends = styled(TitleLoanAvailable)``;

const TitleButtonFriends = styled(TitleButtonAvailable)``;

const ContainerFriends = styled.View`
    width: 90%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.Primary};
    padding: 10px;
    border-radius: 10px;
    margin-top: 5%;
`;

const ImageFriend = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.colors.Black};
`;

const ContainerTitleFriend = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    width: 67%;
    margin-left: 15px;
`;

const TitleFriendUser = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 17px;
`;

const SubtitleFriendName = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.White};
    opacity: 0.8;
    font-size: 13px;
`;

const IconButtonMenuFriend = styled(Feather)`
    color: ${(props) => props.theme.colors.White};
`;

const ContainerNoFriend = styled.View`
    width: 90%;
    height: 190px;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.colors.Primary};
    padding: 10px;
    border-radius: 10px;
    margin-top: 5%;
`;

const ImageNoFriend = styled.Image`
    width: 55px;
    height: 55px;
`;

const TitleNoFriend = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 15px;
`;

const ButtonAddFriend = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.Secondary};
    width: 70%;
    height: 45px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const IconAddFriend = styled(Feather).attrs((props) => ({
    size: 25,
    color: props.theme.colors.Black,
}))`
    margin-right: 10px;
`;

const TitleButtonAddFriend = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 17px;
`;

export {
    Container,
    ContainerTitlePresentation,
    TitlePresentation,
    SubtitlePresentation,
    ContainerLoanWait,
    ImageLoanWait,
    TitleLoanWait,
    ContainerItemsLoan,
    ContainerSelectItemsLoan,
    ImageSelectItemLoan,
    TitleSelectItemLoan,
    ContainerTitleLoanAvailable,
    TitleLoanAvailable,
    TitleButtonAvailable,
    ContainerTitleFriends,
    TitleLoanFriends,
    TitleButtonFriends,
    ContainerFriends,
    ImageFriend,
    ContainerTitleFriend,
    TitleFriendUser,
    SubtitleFriendName,
    IconButtonMenuFriend,
    ContainerNoFriend,
    ImageNoFriend,
    TitleNoFriend,
    ButtonAddFriend,
    IconAddFriend,
    TitleButtonAddFriend,
};
