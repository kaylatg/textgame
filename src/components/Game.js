// Game.js

import React, { useState } from 'react';
import Story from './Story';

const Game = () => {
    const [scenario, setScenario] = useState(0);
    const [gameResult, setGameResult] = useState(null);

    const handleChoice = (choice) => {
        if (choice.nextScenario !== undefined) {
            setScenario(choice.nextScenario);
        } else {
            console.error('Invalid choice!');
        }
    };

    const restartGame = () => {
        setScenario(0);
        setGameResult(null);
    };

    const handleGameResult = (result) => {
        setGameResult(result);
    };

    return (
        <div>
            {gameResult === 'win' && <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240222121721/win.jpg" alt="You win" />}
            {gameResult === 'lose' && <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240222122023/lose.jpg" alt="You lose" />}
            {gameResult ? (
                <center>
                    <button onClick={restartGame}>Restart Game</button>
                </center>
            ) : (
                <Story scenario={scenario} onChoice={handleChoice} onGameResult={handleGameResult} />
            )}
        </div>
    );
};

export default Game;
