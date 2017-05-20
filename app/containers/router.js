import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Router, Scene, Modal, Actions, ActionConst } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { reducer } from '../redux'

import Cars from './cars'
import carDetails from './carDetails'


class TabIcon extends Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

class AppRouter extends Component {
  render() {
    let styles = StyleSheet.create({
      tabBar: {
        borderTopWidth: 0.5,
        borderColor: '#b7b7b7',
        backgroundColor: '#fff',
        opacity: 1
      }
    })

    return (
      <Router>
        <Scene key={'root'}>
          <Scene key={'tabs'} hideNavBar={true} tabs={true} tabBarStyle={styles.tabBar} direction={'vertical'}>
            <Scene
              key={'carsTab'}
              title={'My Cars'}
              icon={TabIcon}
              style={{paddingTop: 64}}
            >
              <Scene
                key={'cars'}
                component={Cars}
                title={'My Cars'}
                passProps={true}
                />
                <Scene
                key={'carDetails'}
                component={carDetails}
                title={'Details'}
                leftTitle="Back"
                />
            </Scene>
          </Scene>
        </Scene>


      </Router>
    )
  }
}

export default connect()(AppRouter)