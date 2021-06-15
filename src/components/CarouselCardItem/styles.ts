import styled from "styled-components/native";

const Container = styled.View`
    width: 249px;
    height: 136px;
    border-radius: 15px;
    background-color: #f5f5f5;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.Text`
    font-family: FredokaOne_400Regular;
    color: #333333;

    text-align: center;
    font-size: 18px;
`;

const Message = styled.Text`
    font-family: VarelaRound_400Regular;
    color: #636363;

    text-align: center;
    font-size: 13px;
    margin-bottom: 15px;
`;

export { Container, Title, Message };
