import React, {Component} from 'react'
import {getAccounts} from './data-layer/accounts'

export class AccountsView extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const accounts = getAccounts()
            .then((accounts) => console.log('accounts', accounts))
    }
    render() {
        return (
            <div>
                {'hello world'}
            </div>
        )
    }
}
