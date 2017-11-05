// @flow

import {
    get,
    map,
} from 'lodash'
import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Box} from 'rebass'
import {DataLoader} from './data-loader'
import {getAccounts, getCustomers} from '../data-layer'


const AccountsView = ({accounts}) => (
    <div> 
    <Container>
        {map(accounts, (account) => (
            <Box py={2} key={account}>
                <Link to={`/accounts/${account}`}>
                    {account}
                </Link>
            </Box>
        ))} 
     </Container>
     </div>
)

export const Accounts = () => (
    <DataLoader apiCall={getAccounts} >
        {(data) => (
            <AccountsView accounts={data} />
        )}
    </DataLoader>
)


type AccountModel = {
    authorized_users: Array<{customer_id: number, credit_card_number: string}>,
    balance: number,
    card_type: string,
    credit_limit: number,
    total_rewards_earned: number,
    total_rewards_used: number,
}


const AuthorizedUserView = ({customerId}) => (
    <Container>
    </Container>
)

const AccountView = ({
    authorized_users,
    balance,
    card_type,
    credit_limit,
    total_rewards_earned,
    total_rewards_used,
}) => (
    <Container>
        <Box>
            {'Card Type: '}
            {card_type}
        </Box>
        <Box>
            {'balance: '}
            {balance}
        </Box>
        <Box>
            {'Credit Limit: '}
            {credit_limit}
        </Box>
        <Box>
            {'rewards used: '}
            {total_rewards_used}
        </Box>
        <Box>
            {'rewards earned: '}
            {total_rewards_earned}
        </Box>
        <Box>
            {'authorized_users: '}
            <Box pl={2}>
                {map(authorized_users, ({customer_id, credit_card_number}) => (
                    <Box>
                        {'customer id: '}
                        {customer_id}
                    </Box>

                ))}
            </Box>
        </Box>
    </Container>
)

export const Account = ({match}) => (
    <DataLoader apiCall={getAccounts} params={{id: get(match, 'params.id')}} >
        {(data) => (
            <AccountView {...data[0]} />
        )}
    </DataLoader>
)

