import React, { Component } from 'react'
import './App.scss'
import SongIcon from './components/SongIcon'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songArray: [
        {
          title: 'Start of Something New'
        },
        {
          title: 'Get\'cha Head In the Game'
        },
        {
          title: 'What I\'ve Been Looking For'
        },
        {
          title: 'Stick to the Status Quo'
        }
      ],
      song1: {
        title: ''
      },
      song2: ''
    }
    this._pickTwoSongs = this._pickTwoSongs.bind(this)
  }

  componentDidMount() {
    this._pickTwoSongs()
  }

  _shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  _pickTwoSongs() {
    const songArray = this.state.songArray
    this._shuffle(songArray)
    const index = Math.floor(Math.random() * songArray.length)
    this.setState(prevState => ({
      song1: {
        ...prevState.song1,
        title: songArray[index].title
      }
    }))
  }



  render() {
    return (
      <div className="App">
        <SongIcon
          song1={this.state.song1}
          songArray={this.state.songArray}
        />
      </div>
    );
  }
}

export default App;
