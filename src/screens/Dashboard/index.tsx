import React from 'react';

import {
    Container,
    Header,
    Icon,
    Photo,
    User,
    UserGreeting,
    UserInfo,
    UserName,
    UserWrapper,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: "1",
            type: 'positive',
            title: 'Desenvolvimento de Aplicativo',
            amount: 'R$ 10.000,00',
            date: '10/02/2022',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            }
        },
        {
            id: "2",
            type: 'negative',
            title: 'Big Mac com fritas',
            amount: 'R$ 10.000,00',
            date: '10/02/2022',
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            }
        },
        {
            id: "3",
            type: 'positive',
            title: 'Desenvolvimento de Sistema',
            amount: 'R$ 10.000,00',
            date: '10/02/2022',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            }
        },
        {
            id: "4",
            type: 'negative',
            title: 'Aluguel de carro',
            amount: 'R$ 1.000,00',
            date: '10/02/2022',
            category: {
                name: 'Aluguel',
                icon: 'shopping-bag'
            }
        }
    ]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/63833005?v=4' }} />
                        <User>
                            <UserGreeting>
                                Olá,
                            </UserGreeting>

                            <UserName>
                                Felipe
                            </UserName>
                        </User>
                    </UserInfo>
                    <Icon
                        name="power"
                    />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard
                    type='up'
                    title='Entradas'
                    amount={'RS 17.400,00'}
                    lastTransaction={'Última entrada dia 13 de abril'}
                />

                <HighlightCard
                    type='down'
                    title='Saídas'
                    amount={'RS 1.400,00'}
                    lastTransaction={'Última entrada dia 12 de abril'}
                />

                <HighlightCard
                    type='total'
                    title='Total'
                    amount={'RS 14.341,00'}
                    lastTransaction={'Última entrada dia 03 de abril'}
                />
            </HighlightCards>


            <Transactions>
                <Title>Listagem</Title>
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    );
}
