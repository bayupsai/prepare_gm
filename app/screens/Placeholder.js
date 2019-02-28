import React, { PureComponent } from 'react'
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
// import Placeholder from 'rn-placeholder'
import { connect } from 'react-redux'
import { GET_NEWS } from '../redux/actions/getNews'

import List from './components/placeholders/List'
import { Shimmer } from './components/placeholders/Shimmer'

class Home extends PureComponent {
    constructor(props) {
        super(props)
        // this.state = {
        //     isReady: false
        // }
    }
    
    // componentDidMount() {
    //     this.props.dispatch(GET_NEWS())
    // }

    // keyExtractor = (item, index) => index.toString()

    // renderItem = ({ item, key })=> (
    //     <View>
    //         <ListItem
    //             key={key}
    //             leftAvatar={
    //                 <Avatar
    //                     source={{ uri: item.urlToImage }}
    //                     size="large"
    //                 />
    //             }
    //             title={
    //                 <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
    //             }
    //             subtitle={
    //                     <Text>{item.description}</Text>
    //             }
    //         />
    //     </View>
    // )
    render() {
        return(
            // <View>
            //     {/* { this.props.read.isLoading
            //         ?
                    
            //         : */}
            //         <Placeholder.ImageContent
            //             size={60}
            //             animate="fade"
            //             lineNumber={4}
            //             lineSpacing={5}
            //             lastLineWidth="30%"
            //             onReady={this.state.isReady}
            //         >
            //         <FlatList
            //             data={this.props.read.data.articles}
            //             renderItem={this.renderItem}
            //             keyExtractor={this.keyExtractor}
            //             listEmptyComponent={
            //                 <Text>Nothing Important</Text>
            //             }
            //         />
            //         </Placeholder.ImageContent>
            //     {/* } */}
                
            // </View>
            <List Placeholder={ Shimmer }/>
        )
    }
}

// const mapStateToProps = (state)=> ({
//     read: state.newsReducer
// })

export default Home