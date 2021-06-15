import styled from "styled-components/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Feather } from "@expo/vector-icons";

const Container = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
`;

const ImageLanding = styled.Image`
    width: 319px;
    height: 250px;
`;

const ContainerCarousel = styled.View`
    width: 259px;
    height: 216px;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 25px;
`;

const ContainerPagination = styled.View`
    height: 0;
`;

const ComponentPaginationStyled = styled(Pagination).attrs({
    dotContainerStyle: { height: 0 },
    dotStyle: {
        width: 35,
        height: 8,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor: "#C23D5D",
    },
    inactiveDotStyle: {
        width: 15,
        height: 15,
        borderRadius: 5,
        marginHorizontal: 3,
        backgroundColor: "#DEC90B",
    },
})``;

const ComponentCarouselStyled = styled(Carousel).attrs({
    sliderWidth: 250,
    itemWidth: 250,
    slideStyle: {
        marginTop: "-2%",
        width: 250,
        height: 150,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
})``;

const ButtonNext = styled.TouchableOpacity`
    width: 76px;
    height: 76px;
    justify-content: center;
    align-items: center;
    background-color: #dec90b;
    border-radius: 50px;
    margin-top: -38px;
`;

interface IIconProps {
    center: string;
}

const IconButtonNext = styled(Feather).attrs({
    size: 45,
    color: "#C23D5D",
})`
    margin-left: ${(props: IIconProps) => (props.center ? "5px" : "0px")};
`;

export {
    Container,
    ImageLanding,
    ContainerCarousel,
    ContainerPagination,
    ComponentPaginationStyled,
    ComponentCarouselStyled,
    ButtonNext,
    IconButtonNext,
};
