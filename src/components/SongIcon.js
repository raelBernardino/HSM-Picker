import React, { Component } from 'react'

class SongIcon extends Component {
  render() {
    return (
      <div className="song-icon_container">
        <div className="song-icon_icon">
          <div className="song-icon_icon-header">
            <span>{this.props.song1.title}</span>
          </div>
          <div className="song-icon_icon-lyrics">
            
          </div>
          <div className="song-icon_icon-vote">
            <i class="song-icon_icon-vote-up far fa-thumbs-up fa-3x"></i>
            <i class="song-icon_icon-vote-down far fa-thumbs-down fa-3x"></i>
          </div>
        </div>
      </div>
    )
  }
}

export default SongIcon