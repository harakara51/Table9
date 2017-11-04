// accounts api layer
import fetch from 'node-fetch'

const accountsEndpoint = 'http://localhost:5000/accounts'

export function getAccounts() {
    return fetch(accountsEndpoint)
        .then(res => res.json())
}





