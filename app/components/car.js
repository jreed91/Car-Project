import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'

export default class Car extends Component {
  render() {
    const { make, model, year, trim, icon, id } = this.props

    let image
    try {
      image = icon
    } catch (e) {

    }

    let styles = StyleSheet.create({
      container: {
        height: 100,
        padding: 15,
        flexDirection: 'row'
      },
      thumbnailSection: {
        width: 100
      },
      textSection: {
        flex: 1,
        padding: 5
      },
    })

    return (
      <View style={styles.container}>
        <View style={styles.thumbnailSection}>
          <Image source={{uri: image}} style={{width: 100, height: 40}}/>
        </View>
        <View style={styles.textSection}>
          <Text>{make}</Text>
          <Text>{model}</Text>
       </View>
      </View>
    )
  }
}