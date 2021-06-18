import React, { useRef, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { IStore } from "../../store/reducers";

import BackgroundImage from "../../components/BackgroundImage";
import CarouselCardItem from "../../components/CarouselCardItem";

import backgroundLandingPage from "../../assets/images/backgroundLandingPage.png";
import imagePeopleCalendar from "../../assets/images/imagePeopleCalendar.png";

import {
    Container,
    ImageLanding,
    ContainerCarousel,
    ComponentPaginationStyled,
    ComponentCarouselStyled,
    ButtonNext,
    IconButtonNext,
} from "./styles";

const LandingPage = ({ navigation }: { navigation: any }) => {
    const isCarousel = useRef<any>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const data = useSelector((store: IStore) => store.CarouselReducer.data);

    return (
        <BackgroundImage image={backgroundLandingPage}>
            <Container>
                <View>
                    <ImageLanding source={imagePeopleCalendar} />
                </View>
                <View style={{ alignItems: "center" }}>
                    <ContainerCarousel>
                        <ComponentPaginationStyled
                            dotsLength={data.length}
                            activeDotIndex={activeSlide}
                            dotContainerStyle={{ height: 0 }}
                        />
                        <ComponentCarouselStyled
                            layout="tinder"
                            layoutCardOffset={0}
                            ref={isCarousel}
                            data={data}
                            renderItem={CarouselCardItem}
                            inactiveSlideShift={0}
                            useScrollView
                            onSnapToItem={(index) => setActiveSlide(index)}
                        />
                    </ContainerCarousel>
                    <ButtonNext
                        onPress={() => {
                            if (activeSlide + 1 === data.length) {
                                navigation.navigate("access");
                            } else {
                                isCarousel.current.snapToNext();
                            }
                        }}
                    >
                        {activeSlide + 1 !== data.length ? (
                            <IconButtonNext name="chevron-right" center />
                        ) : (
                            <IconButtonNext name="arrow-right" />
                        )}
                    </ButtonNext>
                </View>
            </Container>
        </BackgroundImage>
    );
};

export default LandingPage;
