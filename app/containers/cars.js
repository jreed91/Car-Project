import React, { Component, PropTypes } from 'react'
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { postsActionCreators } from '../redux'

import Car from '../components/car'

const mapStateToProps = (state) => ({
  cars: state.cars
})

const _pressRow = (car) => Actions.carDetails({car});

class Cars extends Component {

componentWillReceiveProps(nextProps) {
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
      dataSource: ds.cloneWithRows(nextProps.cars.cars),
    };
}

constructor(props) {
    super(props)
    const { cars } = this.props.cars
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(cars),
    };
  }

  renderCars = (car, rowId) => {
    // ListView by default removes clipped subviews
    // but only for children who have an overflow: 'hidden'
    // on their style.
    // Very simple but makes a huge difference!
    return (
    <TouchableHighlight onPress={() => {
          _pressRow(car);
        }}>
      <View style={styles.listItem}>
        <Car
        key={car.id} 
        make={car.make}
        model={car.model}
        year={car.model}
        trim={car.trim}
        icon={car.icon}
        />
      </View>
    </TouchableHighlight>
    )
  }

  render() {
    const { cars } = this.props
    
    return (
   
      <View style={styles.container}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderCars}
         />
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
    })

export default connect(mapStateToProps)(Cars)