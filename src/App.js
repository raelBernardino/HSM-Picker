import React, { Component } from 'react'
import './App.scss'
import SongIcon from './components/SongIcon'
import Completed from './components/Completed'
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
          title: 'We\'re Breaking Free',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'We\'re All In this Together',
          points: 0,
          id: uuidv1()
        },        {
          title: 'What Time Is It',
          points: 0,
          id: uuidv1()
        },        {
          title: 'Fabulous',
          points: 0,
          id: uuidv1()
        },        {
          title: 'Work It Out',
          points: 0,
          id: uuidv1()
        },        {
          title: 'You Are the Music in Me',
          points: 0,
          id: uuidv1()
        },        {
          title: 'Now or Never',
          points: 0,
          id: uuidv1()
        },        {
          title: 'Right Here Right Now',
          points: 0,
          id: uuidv1()
        },        {
          title: 'I Want It All',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'Can I Have this Dance',
          points: 4,
          id: uuidv1()
        },
        {
          title: 'A Night to Remember',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'I Just Wanna Be With You',
          points: 0,
          id: uuidv1()
        },
        {
          title: 'The Boys are Back',
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
      finishCounter: 0,
      completed: true
    }
    this._displaySongs = this._displaySongs.bind(this)
    this._addPoint = this._addPoint.bind(this)
    this._completed = this._completed.bind(this)
    // this._rankSongs = this._rankSongs.bind(this)
  }

  componentDidMount() {
    this._displaySongs()
  }

  _displaySongs() {
    const songArray = this.state.songArray
    let currentIndex = this.state.currentIndex
    let indexCounter = this.state.indexCounter + 1
    let finishCounter = this.state.finishCounter
    let completed = this.state.completed
    if (completed === false) {
      if (indexCounter === songArray.length) {
        currentIndex = currentIndex + 1
        indexCounter = currentIndex + 1
        finishCounter++
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
        finishCounter,
        completed
      }))
    }
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
    this._completed()
  }

  _completed() {
    const finishCounter = this.state.finishCounter
    const songArray = this.state.songArray
    let completed = this.state.completed
    if (finishCounter === songArray.length - 2) {
      completed = !completed
      this.setState({ completed })
      this._rankSongs()
    } else {
      this._displaySongs()
    }
  }

  _rankSongs() {
    let songArray = this.state.songArray
    songArray.sort((a, b) => {
      if (a.points > b.points) {
        return -1
      }
    })
    this.setState({ songArray })
    console.log(songArray)
  }

  render() {
    return (
      <div className="App">
        <div className="main-header">
          <span>High School Musical Song Ranker</span>
        </div>
        {this.state.completed ?
          <Completed
            songArray={this.state.songArray}
          />
          :
          <SongIcon
            song1={this.state.song1}
            song2={this.state.song2}
            songArray={this.state.songArray}
            displaySongs={this._displaySongs}
            addPoint={this._addPoint}
          />
        }
      </div>
    );
  }
}

export default App;
