import styled from "styled-components/native";

const Container = styled.View`
    width: 249px;
    height: 136px;
    border-radius: 15px;
    background-color: ${(props) => props.theme.colors.White};
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};

    text-align: center;
    font-size: 18px;
`;

const Message = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.Black};
    opacity: 0.8;

    text-align: center;
    font-size: 13px;
    margin-bottom: 15px;
`;

export { Container, Title, Message };
