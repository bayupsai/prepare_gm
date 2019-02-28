import React, { PureComponent } from 'react'
import { bindActionCreators, compose } from 'redux';
import connect from 'react-redux/lib/connect/connect';

const HOC = WrappedContent=> {
    class abc extends PureComponent {
        render() {
            return(
                <WrappedContent {...this.props} {...this.state} />
            )
        }
    }

    const mapStateToProps = (state)=> ({state})

    const mapDispatchToProps = dispatch=> bindActionCreators({...actions}, dispatch)

    return connect(mapStateToProps, mapDispatchToProps)(abc)
}

export default compose(
    HOC, connect(mapStateToProps)
)()