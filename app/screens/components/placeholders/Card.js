import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const DEFAULT_SIZE = 7
const IMAGE_SIZE = 60

export default function Card({ image, title, description, isLoaded, Placeholder }) {
    const heightStyle = { height: 150 }
    return (
        <View style={[styles.card, !isLoaded && heightStyle]}>
            <Placeholder isLoaded={isLoaded}>
                <View>
                    <View style={styles.container}>
                        <Image source={{ uri: image }} style={styles.media} />
                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description}>{description}</Text>
                        </View>
                    </View>
                </View>
            </Placeholder>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 5,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {
          height: 1,
          width: 0.3,
        },
        marginBottom: DEFAULT_SIZE,
        marginRight: DEFAULT_SIZE,
        marginLeft: DEFAULT_SIZE,
      },
      media: {
        height: IMAGE_SIZE,
        width: IMAGE_SIZE,
        marginRight: DEFAULT_SIZE,
      },
      container: {
        flex: 1,
        flexDirection: 'row',
      },
      title: {
        flex: 1,
        color: '#3F51B5',
        fontSize: 16,
      },
      description: {
        marginTop: DEFAULT_SIZE,
        lineHeight: DEFAULT_SIZE * 2,
        color: '#444444',
    },
})