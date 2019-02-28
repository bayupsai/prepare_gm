import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'

import List from './components/Hoc/List'
import WithLoading from './components/Hoc/Loading'

class Hoc extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            repos: null
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res=> res.json())
            .then(repos=> {
                this.setState({ loading: false, repos: repos })
            })
    }

    render() {
        return(
            <View>
                <ListWithLoading isLoading={this.state.Loading} repos={this.state.repos} />
            </View>
        )
    }
}

const ListWithLoading = WithLoading(List)

export default Hoc