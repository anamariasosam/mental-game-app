import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Tile from '../components/Tile'

const styles = StyleSheet.create({
  board: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    maxWidth: 248,
  },
  hardLevel: {
    maxWidth: 310,
  },
})

class Board extends Component {
  constructor() {
    super()

    this.state = {
      openedCount: 0,
      selectedCards: [],
    }
  }

  // Show Tile Selected
  handleTileOpacity(id, opacity) {
    const { tiles } = this.props
    const tileIndex = tiles.findIndex(item => item.id === id)
    const tile = tiles[tileIndex]
    tile.opacity = opacity

    const tilesUpdated = tiles
      .slice(0, tileIndex)
      .concat(tile, tiles.slice(tileIndex + 1, tiles.length))

    this.setState({ tiles: tilesUpdated })
  }

  // Validate two cards openened
  handleCardClick(tile) {
    const cards = this.state.selectedCards
    const openedCount = this.state.openedCount + 1

    this.handleTileOpacity(tile.id, 1)

    if (cards.length < 2) {
      const selectedCards = [...cards, tile]
      this.setState({ selectedCards })

      if (selectedCards.length === 2) {
        const isDifferentCard = selectedCards[0].name !== selectedCards[1].name

        if (isDifferentCard) {
          setTimeout(() => {
            this.handleTileOpacity(selectedCards[0].id, 0)
            this.handleTileOpacity(selectedCards[1].id, 0)
          }, 500)
        } else {
          this.props.countPairs(openedCount)
        }

        this.setState({ selectedCards: [] })
      }
    }
    this.setState({ openedCount })
  }

  render() {
    return (
      <View>
        <View style={[styles.board, this.props.isHard && styles.hardLevel]}>
          {
            this.props.tiles.map(tile => (
              <Tile
                {...tile}
                key={tile.id}
                onPress={() => this.handleCardClick(tile)}
              />
            ))
          }
        </View>
      </View>
    )
  }
}

Board.propTypes = {
  tiles: PropTypes.any,
  isHard: PropTypes.bool,
  countPairs: PropTypes.func,
}

export default Board
