// import React from 'react'
// import { Flatlist, View, Button } from 'react-native'
// import { connect } from 'react-redux'
// import { GET_NEWS } from '../../../redux/actions/getNews'
// import Card from './Card'
// import data from './data'

// class List extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: [],
//             isLoading: false
//         }
//     }

//     componentDidMount() {
//         this.props.dispatch(GET_NEWS())
//     }

//     componentWillMount() {
//         this.handleReload()
//     }

//     handleReload = ()=> {
//         this.props.dispatch(GET_NEWS())
//         this.setState({
//             items: this.props.news.data.articles,
//             isLoading: true
//         })

//         setTimeout(()=> {
//             this.setState({
//                 isLoading: false
//             }, 4000)
//         })
//     }

//     renderItem = ({item, key})=> (
//         <Card
//             key={key}
//             Placeholder={this.props.Placeholder}
//             image={item.urlToImage}
//             isLoaded={!this.state.isLoading}
//             description={item.description}
//             title={item.title}
//         />
//     )

//     render() {
//         return(
//             <View>
//                 <Button
//                     title="Reload"
//                     onPress={this.handleReload}
//                     disabled={this.state.isLoading}
//                     style={{ marginBottom: 10}}
//                 />

//                 <Flatlist
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={this.renderItem}
//                     data={this.state.items}
//                     extraData={this.state.isLoading}
//                 />
//             </View>
//         )
//     }
// }

// const mapStateToProps = (state)=> ({
//     news: state.newsReducer
// })

// export default connect(mapStateToProps)(List)



import React from 'react';
import { FlatList, View, Button } from 'react-native';
import Card from './Card';
import data from './data';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        isLoading: false,
        page: 1,
        posts: []
    };
  }

  componentWillMount() {
    this.handleReload();
  }

  // componentDidMount() {
  //   this.getData()
  // }

  // getData = async ()=> {
  //   const url = 'https://jsonplaceholder.typicode.com/photos?_limit=30'
  //   fetch(url)
  //   .then(res=> res.json())
  //   .then(resJson=> {
  //     this.setState({
  //       items: resJson
  //     })
  //   })
  // }

  handleReload = () => {
    this.setState({
      items: data,
      isLoading: !this.state.isLoading,
    });

    setTimeout(() => {
      this.setState({ isLoading: false });
    });
  };

  handleLoadMore = ()=> {
    console.warn('Warning')
  }

  renderItem = ({ item, key}) => (
    <Card
        key={key}
        Placeholder={this.props.Placeholder}
        image={item.urlToImage}
        isLoaded={!this.state.isLoading}
        title={item.title}
        description={item.description}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, marginTop: 12 }}>
        <Button
          title="Reload current tab"
          onPress={this.handleReload}
          disabled={this.state.isLoading}
          style={{ marginBottom: 10 }}
        />

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
          data={this.state.items}
          extraData={this.state.isLoading}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
        />
      </View>
    );
  }
}


// import React from 'react';
// import { FlatList, View, Button } from 'react-native';
// import Card from './Card';
// import data from './data';

// export default class List extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         items: [],
//         isLoading: false,
//     };
//   }

//   componentDidMount() {
//     this.getData()
//   }

//   getData = ()=> {
//     const url='https://jsonplaceholder.typicode.com/photos?_limit=30'
//     fetch(url)
//     .then((response)=> response.json())
//     .then((responseJson)=> {
//       this.setState({
//         items: responseJson
//       })
//     })
//   }

//   handleReload = ()=> {
//     console.warn('handleLoadMore')
//     alert('What?')
//   }

//   renderItem = ({ item, key}) => (
//     <Card
//         key={key}
//         Placeholder={this.props.Placeholder}
//         image={item.thumbnailUrl}
//         isLoaded={!this.state.isLoading}
//         title={item.title}
//         description={item.description}
//     />
//   );

//   render() {
//     return (
//       <View style={{ flex: 1, marginTop: 12 }}>
//         <FlatList
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={this.renderItem}
//           data={this.state.items}
//           extraData={this.state.isLoading}
//           onEndReached={this.handleReload}
//           onEndReachedThreshold={0}
//         />
//       </View>
//     );
//   }
// }
