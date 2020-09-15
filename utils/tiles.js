import shuffle from 'lodash.shuffle'
import TilesList from './TilesList'

export default (gallery, tilesQuantity) => {
  const tiles = TilesList[gallery]
  const data = Object.keys(tiles).slice(0, tilesQuantity)
  const shuffleTiles = shuffle(shuffle(data).concat(shuffle(data)))

  return shuffleTiles.map((tile, index) => (
    {
      id: index,
      name: tile,
      opacity: 0,
      gallery,
    }
  ))
}
