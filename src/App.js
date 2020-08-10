import React from 'react';
import logo from './logo.svg';
import './App.css';
import raccoonLogo from './assets/images/raccoon.png'
import squirrelLogo from './assets/images/squirrel.png'
import bunnyLogo from './assets/images/bunny.png'
import houndsLogo from './assets/images/hound.png'

import Team from './components/team/Team.js'
import Game from './components/game/Game.js'
import ScoreBoard from './components/scoreboard/ScoreBoard'
import { render } from '@testing-library/react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonLogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelLogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunnyLogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndsLogo
  }
  render()
  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
