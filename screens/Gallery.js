import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import PropTypes from 'prop-types'

import GalleryList from '../utils/GalleryList'

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
    backgroundColor: '#00A1A7',
  },
})

class Gallery extends Component {
  static navigationOptions = {
    title: 'Galerías',
    headerLeft: null,
  }

  render() {
    const { navigate } = this.props.navigation
    const data = Object.keys(GalleryList)
    return (
      <ScrollView>
        {data.map((gallery, index) => (
          <Card
            key={index}
          >
            <Card.Title>{`Galería ${index + 1}`}</Card.Title>
            <Card.Image source={GalleryList[gallery]} containerStyle={{ resizeMode: 'contain' }}></Card.Image>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
              <Button
                title='Fácil'
                buttonStyle={styles.button}
                onPress={() => navigate('Game', { gallery, tilesQuantity: 10 })}
              />
              <Button
                title='Difícil'
                buttonStyle={styles.button}
                onPress={() => navigate('Game', { gallery, tilesQuantity: 15 })}
              />
            </View>

          </Card>
        ))}
      </ScrollView>
    )
  }
}

Gallery.propTypes = {
  navigation: PropTypes.any,
}

export default Gallery
