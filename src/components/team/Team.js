//This is the react team component
import React from 'react'
import Game from '/components/game'


function Team(props) {
    let shotPercentageDiv

    if (props.stats.shots) {
        const shotPercentage = Math.round((props.stats.score / props.stats.shots) * 100)
        shotPercentageDiv = (
            <div>
                <strong>Shooting %: {shotPercentage}</strong>
            </div>
        )
    }

    return (
        <div className="Team">
            <h2>{props.name}</h2>

            <div className="identity">
                <img src={props.logo} alt={props.name} />
            </div>

            <div>
                <strong>Shots:</strong> {props.stats.shots}
            </div>

            <div>

                function App(props) {
            const raccoons = {
                    name: 'Russiaville Raccoons',
                logoSrc: './assets/images/raccoon.png'
            }

            const squirrels = {
                    name: 'Sheridan Squirrels',
                logoSrc: './assets/images/squirrel.png'
            }

            const bunnies = {
                    name: 'Burlington Bunnies',
                logoSrc: './assets/images/bunny.png'
            }

            const hounds = {
                    name: 'Hammond Hounds',
                logoSrc: './assets/images/hound.png'
            }

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


                <strong>Score:</strong> {props.stats.score}
            </div>

            {shotPercentageDiv}

            <button onClick={props.shotHandler}>Shoot!</button>
        </div>
    )
}


export default Team
