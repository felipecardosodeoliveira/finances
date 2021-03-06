import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface TypeProps {
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, type }) =>
        type === 'total' ? theme.colors.secondary : theme.colors.shape
    };

    border-radius: 5px;
    margin-right: 16px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    width: ${RFValue(300)}px;
`;

export const Header = styled.View`
    align-items:center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather) <TypeProps>`

    ${({ type, theme }) => type === 'up' && css`
         color: ${theme.colors.success}`
    }

    ${({ type, theme }) => type === 'down' && css`
         color: ${theme.colors.attention}`
    }

    ${({ type, theme }) => type === 'total' && css`
         color: ${theme.colors.shape}`
    }

    font-size: ${RFValue(40)}px;
`;

export const Content = styled.View``;


export const Amount = styled.Text<TypeProps>`
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
    color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`;
