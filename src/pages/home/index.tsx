import React from "react";
import { TouchableOpacity } from "react-native";

import ImageFace from "../../assets/images/ImageFace.png";
import ImageBook from "../../assets/images/ImageBook.png";
import ImageManager from "../../assets/images/ImageManager.png";
import ImagePencil from "../../assets/images/ImagePencil.png";
import ImageFriendAdd from "../../assets/images/ImageFriendAdd.png";
import ImageUser from "../../assets/images/ImageUser.png";

import {
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
} from "./styles";

const HomePage = () => (
    <Container>
        <ContainerTitlePresentation>
            <TitlePresentation>Olá, Ítalo</TitlePresentation>
            <SubtitlePresentation>
                Confira seus empréstimos
            </SubtitlePresentation>
        </ContainerTitlePresentation>
        <ContainerLoanWait>
            <ImageLoanWait source={ImageFace} />
            <TitleLoanWait>Não há empréstimos!</TitleLoanWait>
        </ContainerLoanWait>
        <ContainerTitleLoanAvailable>
            <TitleLoanAvailable>Disponíveis</TitleLoanAvailable>
            <TouchableOpacity onPress={() => {}}>
                <TitleButtonAvailable>Visualizar Todos</TitleButtonAvailable>
            </TouchableOpacity>
        </ContainerTitleLoanAvailable>
        <ContainerItemsLoan>
            <ContainerSelectItemsLoan>
                <ImageSelectItemLoan source={ImagePencil} />
                <TitleSelectItemLoan>Utencílios</TitleSelectItemLoan>
            </ContainerSelectItemsLoan>
            <ContainerSelectItemsLoan>
                <ImageSelectItemLoan source={ImageBook} />
                <TitleSelectItemLoan>Livros</TitleSelectItemLoan>
            </ContainerSelectItemsLoan>
            <ContainerSelectItemsLoan>
                <ImageSelectItemLoan source={ImageManager} />
                <TitleSelectItemLoan>Ferramentas</TitleSelectItemLoan>
            </ContainerSelectItemsLoan>
        </ContainerItemsLoan>
        <ContainerTitleFriends>
            <TitleLoanFriends>Amigos</TitleLoanFriends>
            <TouchableOpacity onPress={() => {}}>
                <TitleButtonFriends>Visualizar Todos</TitleButtonFriends>
            </TouchableOpacity>
        </ContainerTitleFriends>
        <ContainerNoFriend>
            <ImageNoFriend source={ImageFriendAdd} />
            <TitleNoFriend>
                Você não possui amigos, adicione agora!
            </TitleNoFriend>
            <ButtonAddFriend onPress={() => {}}>
                <IconAddFriend name="plus" />
                <TitleButtonAddFriend>Adicionar</TitleButtonAddFriend>
            </ButtonAddFriend>
        </ContainerNoFriend>
        <ContainerFriends>
            <ImageFriend source={ImageUser} />
            <ContainerTitleFriend>
                <TitleFriendUser>@Paulo</TitleFriendUser>
                <SubtitleFriendName>Paulo Silva</SubtitleFriendName>
            </ContainerTitleFriend>
            <TouchableOpacity onPress={() => {}}>
                <IconButtonMenuFriend name="more-vertical" size={25} />
            </TouchableOpacity>
        </ContainerFriends>
    </Container>
);

export default HomePage;
