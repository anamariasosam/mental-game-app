import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import TilesList from '../utils/TilesList'

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#BEBEBE',
    height: 50,
    padding: 1,
    width: 50,
  },
  card: {
    margin: 5,
  },
})

const Tile = ({
  name,
  opacity,
  onPress,
  gallery,
}) => (
  <View style={styles.card}>
    <TouchableOpacity
      disabled={Boolean(opacity)}
      style={styles.image}
      onPress={onPress}
    >
      <Image
        style={{ width: 50, height: 50, opacity }}
        source={TilesList[gallery][name]}
      />
    </TouchableOpacity>
  </View>
)

Tile.propTypes = {
  gallery: PropTypes.string,
  name: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  opacity: PropTypes.number,
}

export default Tile
