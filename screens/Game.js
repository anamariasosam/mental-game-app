import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import tilesGenerator from '../utils/tiles'

import Board from '../components/Board'
import WinnerAlert from '../components/WinnerAlert'
import Status from '../components/Status'

const styles = StyleSheet.create({
  game: {
    flex: 1,
    backgroundColor: '#FDFFFC',
  },
})

class Game extends Component {
  static navigationOptions = {
    title: 'Mental',
    headerLeft: null,
  }

  static convertMinsToHrsMins(seg) {
    let minutes = Math.floor(seg / 60)
    let seconds = seg % 60
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds
    return `${minutes}:${seconds}`
  }

  constructor(props) {
    super(props)

    const { gallery, tilesQuantity } = this.props.route.params

    this.state = {
      counter: 0,
      isHard: tilesQuantity === 15,
      levelEnd: false,
      matchedCount: 0,
      score: 0,
      tiles: tilesGenerator(gallery, tilesQuantity),
    }

    this.tick = this.tick.bind(this)
    this.countPairs = this.countPairs.bind(this)
    this.setScore = this.setScore.bind(this)
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  countPairs(openedCount) {
    const matchedCount = this.state.matchedCount + 1

    if (matchedCount === this.state.tiles.length / 2) {
      setTimeout(() => {
        this.setScore(openedCount, this.state.counter)
      }, 100)
    }

    this.setState({ matchedCount })
  }

  setScore(openedCount, time) {
    const score = time / openedCount
    this.setState({
      levelEnd: true,
      score,
    })
  }

  render() {
    const {
      tiles, isHard, matchedCount, counter, score, levelEnd,
    } = this.state

    return (
      <ScrollView style={styles.game}>
        <Board
          tiles={tiles}
          isHard={isHard}
          countPairs={this.countPairs}
        />
        <Status
          matched={matchedCount}
          cardsTotal={tiles.length / 2}
          time={Game.convertMinsToHrsMins(counter)}
        />
        <WinnerAlert
          visibility={levelEnd}
          score={score}
          navigation={this.props.navigation}
        />
      </ScrollView>
    )
  }
}

Game.propTypes = {
  navigation: PropTypes.any,
}

export default Game
