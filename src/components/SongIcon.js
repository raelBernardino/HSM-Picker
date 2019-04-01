import React, { Component } from 'react'

class SongIcon extends Component {
  render() {
    return (
      <div className="song-icon_container">
        <div className="song-icon_icon">
          <div className="song-icon_icon-header" onClick={() => this.props.addToWinnerArrSongOne()}>
            <span>{this.props.song1.title}</span>
          </div>
          <div className="song-icon_icon song-icon_icon-special">
            <div className="song-icon_icon-header song-icon_icon-header_special">
              <span>Both</span>
            </div>
            <div className="song-icon_icon-header song-icon_icon-header_special">
              <span>No Opinion</span>
            </div>
          </div>
          <div className="song-icon_icon-header" onClick={this.props.addToWinnerArrSongTwo}>
            <span>{this.props.song2.title}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SongIcon