import styled from "styled-components/native";

const Container = styled.ImageBackground`
    width: ${(props) => props.theme.dimensions.screen.width};
    height: ${(props) => props.theme.dimensions.screen.height};
`;

export { Container };
