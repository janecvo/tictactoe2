import React, {useState} from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';


const styles = {
    width: '200px',
    margin: '40px auto'
};
const styleH1 = {
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: 'Arial',
    color: 'darkblue'
}

const styleText = {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: '15px',
    color: 'darkblue'
};

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0); 
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    
    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current]; 
        //If user clicks an occupied square or if game is won, return
        if (winner || squares[i]) return;
        //Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory,squares]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move #${move}`: 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination} </button>
                </li>
            )
        })
        
    )

    return (
        <>
            <h1 style={styleH1}> Tic Tac Toe</h1>
            <p style={styleText}>Play tic tac toe with a friend. Start by clicking on any box to begin. Your moves will be tracked below the grid.</p> 
            <p style={styleText}>When you are done, clear the grid by clicking "Go to start." Enjoy!</p>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style ={styles}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                {renderMoves()}</p>
            </div>
        </>
    )
}

export default Game;

