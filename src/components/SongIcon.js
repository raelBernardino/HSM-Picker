import React, { Component } from 'react'

class SongIcon extends Component {
  render() {
    const {
      song1,
      song2,
      addPoint
    } = this.props
    return (
      <div className="song-icon_container">
        <p>There are 2 songs presented and you will have to choose which one you enjoy more. The song on the left is presented as the CURRENT song. It will be compared to the changing songs on the right until it has been matched up against every single song. When that occurs, the CURRENT song will change and the same proccess continues. When finished, you will see your results. Have fun, it's going to be a while.</p>
        <div className="song-icon_icon">
          <div className="song-icon_icon-header" onClick={(e) => addPoint(song1.id, song2.id)}>
            <span>{song1.title}</span>
          </div>
          <div className="song-icon_icon-header" onClick={(e) => addPoint(song2.id, song1.id)}>
            <span>{song2.title}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SongIcon