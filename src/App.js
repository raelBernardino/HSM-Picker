import React, { Component } from 'react'
import './App.scss'
import SongIcon from './components/SongIcon'
const uuidv1 = require('uuid/v1')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songArray: [
        {
          title: 'Start of Something New',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'Get\'cha Head In the Game',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'What I\'ve Been Looking For',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'Stick to the Status Quo',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'When There Was Me and You',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'Bop to the Top',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'Breaking Free',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'We\'re All in This Together',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'I Can\'t Take My Eyes Off of You',
          points: 0,
          id: uuidv1()
        }
      ],
      song1: {
        title: '',
        points: 0,
      },
      song2: {
        title: '',
        points: 0
      },
      currentIndex: 0,
      indexCounter: 0,
      done: false
    }
    this._displaySongs = this._displaySongs.bind(this)
    this._addPoint = this._addPoint.bind(this)
  }

  componentDidMount() {
    this._displaySongs()
  }

  _displaySongs() {
    const songArray = this.state.songArray
    let currentIndex = this.state.currentIndex
    let indexCounter = this.state.indexCounter + 1
    let done = this.state.done
    if (indexCounter === songArray.length) {
      currentIndex = currentIndex + 1
      indexCounter = currentIndex + 1
    }
    this.setState(prevState => ({
      song1: {
        ...prevState.song1,
        title: songArray[currentIndex].title,
        id: songArray[currentIndex].id
      },
      song2: {
        ...prevState.song2,
        title: songArray[indexCounter].title,
        id: songArray[indexCounter].id
      },
      indexCounter,
      currentIndex,
      done
    }))
  }

  _addPoint(winId, loseId) {
    const songArray = this.state.songArray
      .map(song => {
        let updatedPoints = song.points
        if (song.id === winId) {
          updatedPoints++
        } else if (song.id === loseId) {
          updatedPoints--
        }
        return {
          ...song,
          points: updatedPoints
        }
      })
    this.setState({ songArray })
    console.log(this.state.currentIndex)
    this._displaySongs()
  }

  render() {
    return (
      <div className="App">
        <div className="main-header">
          <span>High School Musical Song Ranker</span>
        </div>
        <SongIcon
          song1={this.state.song1}
          song2={this.state.song2}
          songArray={this.state.songArray}
          displaySongs={this._displaySongs}
          addPoint={this._addPoint}
        />
      </div>
    );
  }
}

export default App;
