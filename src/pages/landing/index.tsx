import React, { useRef, useState } from "react";
import { View } from "react-native";

import BackgroundImage from "../../components/BackgroundImage";
import CarouselCardItem from "../../components/CarouselCardItem";

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

import data from "../../store/data";

const LandingPage = ({ navigation }: { navigation: any }) => {
    const isCarousel = useRef<any>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <BackgroundImage>
            <Container>
                <View>
                    <ImageLanding source={imagePeopleCalendar} />
                </View>
                <View style={{ alignItems: "center" }}>
                    <ContainerCarousel>
                        <ComponentPaginationStyled
                            dotsLength={data.length}
                            activeDotIndex={activeSlide}
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
