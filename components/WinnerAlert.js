import React from 'react'
import PropTypes from 'prop-types'

import { Button, Text, Overlay } from 'react-native-elements'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9F1C',
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
})

const WinnerAlert = ({ navigation, visibility, score }) => {
  const { navigate } = navigation

  return (
    <Overlay
      borderRadius={6}
      isVisible={visibility}
      overlayBackgroundColor="#E71D36"
      height="auto"
      width="auto"
      windowBackgroundColor="rgba(255, 255, 255, .9)"
    >
      <View>
        <Text h3 style={styles.title}>
          🎉 TERMINASTE 🎉
        </Text>
        <Text h4 style={styles.title}>
          Tu puntaje es: {score.toFixed(2)}
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Ver Galería"
          onPress={() => navigate('Gallery')}
        />
        <Button
          buttonStyle={styles.button}
          title="Ver Ranking"
          onPress={() => navigate('Ranking')}
        />
      </View>
    </Overlay>
  )
}

WinnerAlert.propTypes = {
  navigation: PropTypes.any,
  visibility: PropTypes.bool,
  score: PropTypes.number,
}

export default WinnerAlert
