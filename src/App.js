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
        },
        {
          title: 'When There Was Me and You'
        },
        {
          title: 'Bop to the Top'
        },
        {
          title: 'Breaking Free'
        },
        {
          title: 'We\'re All in This Together'
        },
        {
          title: 'I Can\'t Take My Eyes Off of You'
        }
      ],
      winnerArray: [],
      loserArry: [],
      song1: {
        title: ''
      },
      song2: {
        title: ''
      }
    }
    this._pickTwoSongs = this._pickTwoSongs.bind(this)
    this._addToWinnerArrSongOne = this._addToWinnerArrSongOne.bind(this)
    this._addToWinnerArrSongTwo = this._addToWinnerArrSongTwo.bind(this)
  }

  componentDidMount() {
    this._pickTwoSongs()
  }

  _pickTwoSongs() {
    const songArray = this.state.songArray
    const firstIndex = 0
    const lastIndex = songArray.length - 1
    this.setState(prevState => ({
      song1: {
        ...prevState.song1,
        title: songArray[firstIndex].title
      },
      song2: {
        ...prevState.song2,
        title: songArray[lastIndex].title
      }
    }))
    console.log(this.state.songArray)
    console.log(this.state.winnerArray)
    console.log(this.state.loserArry)
  }

  _addToWinnerArrSongOne() {
    const winnerSong = this.state.song1
    const loserSong = this.state.song2
    const loserArray = this.state.loserArry
    const winnerArray = this.state.winnerArray
    winnerArray.push(winnerSong)
    loserArray.push(loserSong)
    const songArray = this.state.songArray
    songArray.shift()
    songArray.pop()
    this.setState({
      songArray,
      winnerArray,
      loserArray
    })
    this._pickTwoSongs()
  }

  _addToWinnerArrSongTwo() {
    const winnerSong = this.state.song2
    const winnerArray = this.state.winnerArray
    const loserSong = this.state.song1
    const loserArray = this.state.loserArry
    winnerArray.push(winnerSong)
    loserArray.push(loserSong)
    const songArray = this.state.songArray
    songArray.shift()
    songArray.pop()
    this.setState({
      songArray,
      winnerArray,
      loserArray
    })
    this._pickTwoSongs()
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
          addToWinnerArrSongOne={this._addToWinnerArrSongOne}
          addToWinnerArrSongTwo={this._addToWinnerArrSongTwo}
        />
      </div>
    );
  }
}

export default App;
