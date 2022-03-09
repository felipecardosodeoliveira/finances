
import styled from "styled-components/native";

export const Container = styled.View`
    align-items:center;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    flex: 1;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: 32px;
    font-weight: bold;
`;