import React from 'react'
import { View, Text, FlatList } from 'react-native'

import Card from './Card'

const List = props=> {
    const { repos } = props

    return (
        <View>
            {
                // repos.map(repo=> {
                //     return(
                //         <Text key={repo.id}>{repo.title}</Text>
                //     )
                // })
                // alert(JSON.stringify(repos))
            }
            <FlatList
                data={repos}
                renderItem={({item, key})=> (
                    <View key={key}>
                        <Text>{item.author}</Text>
                    </View>
                )}
                keyExtractor={(item, index)=> index.toString()}
                listEmptyComponent={
                    <Text>Nothing Authors..</Text>
                }
            />
        </View>
    )
}

export default List