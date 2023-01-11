import { StyleSheet, SafeAreaView, Text, Image, View } from 'react-native';
import React from 'react';
import getColorByPokemonType from '../../utils/getColorByPokemonType'
import Pokemon from '../../screens/Pokemon';

export default function Header(props) {

    const { name, order, image, type } = props

    const color = getColorByPokemonType(type)

    const bgStyles = { backgroundColor: color, ...styles.bg }

  return (
    <>
        <View style={bgStyles}/>

        <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
            </View>
            <View style={styles.contentImg}>
                <Image source={{ uri: image }} style={styles.image}></Image>
            </View>
        </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{ scaleX: 2 }]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 27,
        textTransform: 'capitalize'
    },
    order: {
        color: '#fff',
        fontWeight: 'bold'
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: 'contain'
    }
})