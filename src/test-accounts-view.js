import React, {Component} from 'react'
import {getAccounts, getCustomers} from './data-layer'

export class AccountsView extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        getAccounts()
            .then((accounts) => getAccounts(accounts[0]))

        getCustomers()
            .then((customers) =>
                getCustomers(customers[0].customer_id[0]))
    }
    render() {
        return (
            <div>
                {'test-accounts-view: displaying accounts to console...'}
            </div>
        )
    }
}
