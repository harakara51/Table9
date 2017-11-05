// @flow

import {
    get,
    map,
} from 'lodash'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container, Box} from 'rebass'
import renderIf from 'render-if'
import {getAccounts, getCustomers} from '../data-layer'

const AccountsView = ({accounts}) => (
    <Container>
        {map(accounts, (account) => (
            <Box py='2' key={account}>
                <Link to={`/accounts/${account}`}>
                    {account}
                </Link>
            </Box>
        ))}
    </Container>
)


export class Accounts extends Component {
    constructor(props) {
        super(props)
        this.state = {accounts: null}
    }
    componentDidMount() {
        getAccounts()
            .then((accounts) =>
               this.setState({accounts})
            )
    }
    render() {
        const {accounts} = this.state
        return (
            <div>
                {accounts === null ? null : <AccountsView accounts={accounts}/>}
            </div>
        )
    }
}


type AccountModel = {
    balance: number,
    card_type: string,
    credit_limit: number,
    total_rewards_earned: number,
    total_rewards_used: number,
}


const AccountView = ({
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
    </Container>
)

export class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {account: null}
    }

    componentDidMount() {
        console.log('this.props', this.props)
        const id = get(this.props, 'match.params.id')
        getAccounts(id)
            .then((account) => {
                console.log('account ', account)
                this.setState({account: account[0]})
            })
    }

    render() {
        const {account} = this.state
        return (
            <div>
                {account === null ? null : <AccountView {...account}/>}
            </div>
        )
    }
}
