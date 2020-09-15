import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
    marginTop: 30,
    backgroundColor: '#00A1A7',
  },
})

class Ranking extends Component {
  static navigationOptions = {
    title: 'Ranking',
    headerLeft: null,
  }

  render() {
    const { navigate } = this.props.navigation
    const data = [
      {
        name: 'Brynn',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        score: 100,
      },
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        score: 80,
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        score: 10,
      },
    ]
    return (
      <ScrollView>
        <Card containerStyle={{ padding: 0 }} >
          {data.map((user, index) => (
            <ListItem
              key={index}
              leftAvatar={{
                size: 'medium',
                title: user.name.charAt(0),
                rounded: true,
                source: { uri: user.avatar_url },
              }}
              title={user.name}

              badge={{ value: user.score }}
              bottomDivider
            />
          ))}
        </Card>

        <Button
          buttonStyle={styles.button}
          title="Ver Galería"
          onPress={() => navigate('Gallery')}
        />
      </ScrollView>
    )
  }
}

Ranking.propTypes = {
  navigation: PropTypes.any,
}

export default Ranking
