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
        <div className="song-icon_icon">
          <div className="song-icon_icon-header" onClick={(e) => addPoint(song1.id, song2.id)}>
            <span>{song1.title}</span>
          </div>
          {/* <div className="song-icon_icon song-icon_icon-special">
            <div className="song-icon_icon-header song-icon_icon-header_special">
              <span>Both</span>
            </div>
            <div className="song-icon_icon-header song-icon_icon-header_special">
              <span>No Opinion</span>
            </div>
          </div> */}
          <div className="song-icon_icon-header" onClick={(e) => addPoint(song2.id, song1.id)}>
            <span>{song2.title}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SongIcon