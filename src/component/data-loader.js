import React, {Component} from 'react'

export class DataLoader extends Component {
    constructor(props) {
        super(props)
        this.state = {data: null}
    }

    componentDidMount() {
        const {apiCall, params} = this.props
        apiCall(params)
            .then((data) => {
                console.log('data ', data)
                this.setState({data})
            })
    }

    render() {
        const {data} = this.state
        const {children} = this.props
        return data === null
            ? null
            : children(data)
    }
}
