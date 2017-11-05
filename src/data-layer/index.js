// accounts api layer
import fetch from 'node-fetch'

const apiUrl = 'http://localhost:5000'

export function getAccounts({id} = {}) {
    return fetch(id ? `${apiUrl}/accounts/${id}` : `${apiUrl}/accounts`)
        .then(res => res.json())
}

export function getCustomers({id} = {}) {
    return fetch(id ? `${apiUrl}/customers/${id}` : `${apiUrl}/customers`)
        .then(res => res.json())
}

export function getTransactions({id} = {}) {
    return fetch(id ? `${apiUrl}/transactions/${id}` : `${apiUrl}/customers`)
        .then(res => res.json())
}

