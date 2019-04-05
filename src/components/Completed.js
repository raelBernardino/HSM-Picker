import React, { Component } from 'react'

class Completed extends Component {
  render() {
    const {
      songArray
    } = this.props
    return (
      <div className="completed">
        <div className="completed_song-container">
          <div className="completed_song-icon">
            {
              songArray.map((song, i) => (
                <div className="completed_song-ranked" key={song.id}>
                  <span className="completed_song-ranked_title">{i + 1}</span>
                  <span className="completed_song-ranked_title">{`${song.title}: `}</span>
                  <span className="completed_song-ranked_title">{song.points}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Completed