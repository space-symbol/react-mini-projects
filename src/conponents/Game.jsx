import React from 'react';

function Game({questions, step, question, handleClick}) {
    const progress = Math.round(step / questions.length * 100)
    return (
        <>
            <div className="progress">
                <div style={{width: `${progress}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((variant, index, array) => (
                    <li
                        onClick={() => handleClick(index)}
                        key={Math.random() * 100 / 5.12130}>
                        {variant}
                    </li>))}
            </ul>
        </>
    );
}

export default Game;
