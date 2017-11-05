// @flow
import {
    get,
} from 'lodash'
import React from 'react'
import moment from 'moment'
import {Container, Box, Border, Text} from 'rebass'
import {DataLoader} from './data-loader'
import {getAccount, getCustomers} from '../data-layer'


type CustomerModel = {
    first_name: string,
    last_name: string,
}

export const CustomerView = ({
    first_name,
    last_name,
    dob,
}) => (
    <Border py={2} my={1}>
        <Text>
            {`${first_name} ${last_name}`}
        </Text>

        <Text>
            {'Age: '}
            {moment().diff(moment(dob), 'years')}
        </Text>
    </Border>
)


export const Customer = ({id}) => (
    <DataLoader
        apiCall={getCustomers}
        params={{id}}
        key={id}
    >
        {(data) => (
            <CustomerView {...get(data, '[0].customers[0]')} />
        )}
    </DataLoader>
)
