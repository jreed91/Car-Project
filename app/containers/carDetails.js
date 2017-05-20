import React, { Component, PropTypes } from 'react'
import { View, Text, TextInput, ListView, StyleSheet, TouchableHighlight, Image, Button } from 'react-native'
import { connect } from 'react-redux'
import { Actions, ActionConst } from 'react-native-router-flux'
import { carsActionCreators } from '../redux'

const mapStateToProps = (state) => ({
  cars: state.cars
})

class carDetails extends Component {

  constructor(props) {
    super(props)
    const { id, make, model, year, trim, icon } = this.props.car
    this.state = {
      id,
      make,
      model,
      year, 
      trim,
      icon
    }
  }

  
  onChangeText = (text) => 
  {
    this.setState({text})
  }

  saveState = () => {
      this.props.dispatch(carsActionCreators.update(this.state))
  }

  onSubmitEditing = () => {
    const {onSubmitEditing} = this.props
    const {text} = this.state

    if (!text) return // Don't submit if empty

    onSubmitEditing(text)
  }

  render() {

    let image
    try {
      image = this.state.icon
    } catch (e) {

    }
    return (
   
      <View style={styles.container}>
      <View style={styles.thumbnailSection}>
          <Image source={{uri: image}} style={{width: 100, height: 40}}/>
        </View>
        <View style={styles.textSection}>
          <TextInput value={this.state.make} style={styles.input}
          onChangeText={(make) => this.setState({make})} />
          <TextInput onChangeText={(model) => this.setState({model})} value={this.state.model} style={styles.input}/>
          <TextInput onChangeText={(year) => this.setState({year})} value={this.state.year} style={styles.input}/>
          <TextInput onChangeText={(trim) => this.setState({trim})} value={this.state.trim} style={styles.input}/>
          <Button
            onPress={this.saveState}
            title="Save"
          />
       </View>
       </View>

    )
  }
}

let styles = StyleSheet.create({
      container: {
        flex: 1
      },
        listItem: {
        overflow: 'hidden',
      },
      thumbnailSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      textSection: {
        flex: 1,
        padding: 5
      },
      input: {
        padding: 15,
        height: 50,
      },
    })

export default connect(mapStateToProps)(carDetails)