import React from 'react';

function Result({questions, correct, setStep, setCorrect}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <button onClick={()=>{
                setStep(0)
                setCorrect(0)
            }}>Попробовать снова</button>
        </div>
    );
}

export default Result;
