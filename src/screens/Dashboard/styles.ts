
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from 'react-native';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

import { DataListProps } from '.';

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 24
    }
})`
    margin-top: ${RFPercentage(20)}px;
    position: absolute;
    width: 100%;
`;

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFPercentage(42)}px;

    justify-content: center;
    align-items: flex-start;
    flex-direction:row;
    width: 100%;
`;

export const UserWrapper = styled.View`
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    width: 100%;
`;

export const UserInfo = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Photo = styled.Image`
    border-radius: 10px;
    height: ${RFValue(48)}px;
    width: ${RFValue(48)}px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.attention};
    font-size: ${RFValue(24)}px;
`;

export const Transactions = styled.View`
    flex: 1%;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top:16px;
`;

export const TransactionList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})` 
`;
