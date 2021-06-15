import React from "react";

import { Container, Title, Message } from "./styles";

interface ICardProps {
    item: any;
    index: number;
}

const CarouselCardItem: React.FC<ICardProps> = ({
    item,
    index,
}: ICardProps) => (
    <Container key={index}>
        <Title>{item.title}</Title>
        <Message>{item.message}</Message>
    </Container>
);

export default CarouselCardItem;
