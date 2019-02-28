import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { GET_NEWS } from '../redux/actions/getNews'

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
        // this.setState({ loading: true })
        // fetch(`https://jsonplaceholder.typicode.com/users`)
        //     .then(res=> res.json())
        //     .then(repos=> {
        //         this.setState({ loading: false, repos: repos })
        //     })
        this.props.dispatch(GET_NEWS())
    }

    render() {
        return(
            <View>
                <ListWithLoading isLoading={this.state.Loading} repos={this.props.news.data.articles} />
            </View>
        )
    }
}

const mapStateToProps = (state)=> ({
    news: state.newsReducer
})

const ListWithLoading = WithLoading(List)

export default compose(
    connect(mapStateToProps)
)(Hoc)