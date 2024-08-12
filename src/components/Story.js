import React, { useState } from 'react';

const Story = ({ scenario, onChoice, onGameResult }) => {
    // State to track Jake's confidence
    const [isJakeConfident, setJakeConfident] = useState(null);

    const scenarios = [
        { // intro
            id: 0,
            text: 'You are Emma Sinclair, an investigative journalist known for your daring stories. You\'ve been assigned to cover the mysterious and gruesome murders that have plagued the abandoned Blackwood Asylum. Despite numerous investigations, the case remains unsolved, with every investigator who entered never returning or meeting a tragic fate. Determined to uncover the truth, you set off with your loyal cameraman, Jake, to document the horrors within the asylum’s walls. But once inside, you realize that the horrors are far more real—and far more deadly—than you ever imagined.',
            choices: [
                { text: 'Start Game', nextScenario: 1 },
            ]
        },
        { // entering the asylum
            id: 1,
            text: 'You and Jake stand outside the rusted gates of Blackwood Asylum. The air is thick with dread, and the building looms menacingly in the darkness. As you push open the creaking gates, Jake hesitates.',
            choices: [
                { text: 'Reassure Jake and proceed together.', nextScenario: 2, onChoice: () => setJakeConfident(true) },
                { text: 'Insist on entering first to show confidence.', nextScenario: 3, onChoice: () => setJakeConfident(false) }
            ]
        },
        { // scenario 2 (if Jake is confident)
            id: 2,
            text: 'Reassured by your words, Jake follows closely behind as you both enter the asylum. The darkness seems less oppressive with him by your side.',
            choices: [
                { text: 'Proceed to the main hallway.', nextScenario: isJakeConfident ? 4 : 5 }, // Future scenario based on Jake's confidence
            ]
        },
        { // scenario 3 (if Jake is hesitant)
            id: 3,
            text: 'Determined to show confidence, you push ahead. Jake hesitates and lags behind, clearly uneasy as you both step into the asylum.',
            choices: [
                { text: 'Proceed to the main hallway.', nextScenario: isJakeConfident ? 4 : 5 }, // Future scenario based on Jake's confidence
            ]
        }
    ];

    const currentScenario = scenarios.find(s => s.id === scenario);

    const handleChoice = (choice) => {
        if (choice.onChoice) {
            choice.onChoice(); // Execute any special logic (e.g., setting Jake's confidence)
        }
        const nextScenario = choice.nextScenario;
        onChoice(choice);

        if (nextScenario === 7) {
            alert('Congratulations, you found the treasure! The adventure ends here.');
            onGameResult('win');
        } else if (nextScenario === 2 || nextScenario === 6) {
            onGameResult('lose'); 
        }
    };

    return (
        <div className="card mx-auto mt-5" style={{ maxWidth: '500px' }}>
            <div className="card-body">
                <p className="card-text">{currentScenario.text}</p>
                <ul className="list-group">
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index} className="list-group-item">
                            <button className="btn btn-primary btn-block" onClick={() => handleChoice(choice)}>
                            {choice.text}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Story;

