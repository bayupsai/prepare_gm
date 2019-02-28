import { GET_NEWS } from '../../../redux/actions/getNews'
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

const extra = (extraName, extraComponent)=> {
    class extraNon extends PureComponent {
        componentDidMount() {
            this.props.startExtra(extraName)
        }

        render() {
            const {
                [extraName]:variant, ...rest
            } = this.props
            if(variant === undefined) return null
            return <extraComponent {...rest} />
        }
    }

    const mapStateToProps = (state)=> ({
        showVariant: state.newsReducer[extraName] !== 'control',
        [extraName]: state.newsReducer[extraName]
    })

    const mapDispatchToProps = dispatch=> {
        GET_NEWS: name=> dispatch(GET_NEWS(name))
    }

    return connect(mapStateToProps, mapDispatchToProps)(extra)
}

export default extra