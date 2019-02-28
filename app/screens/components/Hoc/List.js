import React from 'react'
import { View, Text } from 'react-native'

const List = props=> {
    const { repos } = props

    if(!repos) return null
    if(!repos.length) return (
        <Text>No repos, Sorry</Text>
    )

    return (
        <View>
            {
                repos.map(repo=> {
                    return(
                        <Text key={repo.id}>{repo.name}</Text>
                    )
                })
            }
        </View>
    )
}

export default List