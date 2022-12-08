import React from 'react'
import { useState, useEffect } from 'react'
import './tic.css'

const Tic = () => {
    // Keep track of the 0's and X'es
    const [ playArray, setplayArray ] = useState([]);
    // Keep track on whose turn it is
    const [activePlayer, setActivePlayer ] = useState(1);
    const [playerClassName, setPlayerClassName ] = useState(["active", "notActive"]);

    const [winner, setWinner ] = useState('');

    // Check for a winner after every render
    useEffect(() => {
        checkForWinnerOrDraw();
    })

    const createButtons = () => {
        let content = [];
        for (let i = 0; i < 9; i++) {
          content.push(
            <button 
                disabled={playArray[i]} // Disable the button after the button is pressed.
                key={i}
                className={i}
                onClick={(e) => setValue(e.target.className)}
            >{playArray[i]}</button>
        );
        }
        return content;
      };  

      const winnerScreen = () => {
        let content = [];
        content.push(<div key='1' 
        className={winner ? "winnerShow" : "winnerHide" }>{winner}</div>);
        return content;
      }

      function refreshPage() {
        window.location.reload(false);
      }

      const playAgain = () => {
        let content = [];
        content.push(<div key='1' 
        className={winner ? "playAgainShow" : "playAgainHide" }><button onClick={refreshPage}>Opnieuw</button></div>);
        return content;
      }       
      

      function blockBoard() {
        let newArr = [...playArray];
        let flag; // Use the flag to stop an endless useEffect loop
        for (let i = 0; i < 9; i++) {
            if(newArr[i] == null ) {
                newArr[i] = " ";
                flag = 1;
            }
        }
        if (flag) setplayArray(newArr);
      }

    const checkForWinnerOrDraw = () => {
        const check = [ 
            playArray[0]+playArray[1]+playArray[2],
            playArray[3]+playArray[4]+playArray[5],
            playArray[6]+playArray[7]+playArray[8],
            playArray[0]+playArray[3]+playArray[6],
            playArray[1]+playArray[4]+playArray[7],
            playArray[2]+playArray[5]+playArray[8],
            playArray[0]+playArray[4]+playArray[8],
            playArray[2]+playArray[4]+playArray[6]
        ]

        if (check.find(element => element === "XXX")) {
            console.log("Player X won!");
            setWinner("Speler X heeft gewonnen!");
            blockBoard();
         } else if (check.find(element => element === "OOO")) {
            console.log("Player O won!");
            setWinner("Speler O heeft gewonnen!");
            blockBoard();
        } else if (playArray.length === 9 && !playArray.includes(undefined)) {
            console.log("It's a draw!");
            setWinner("Gelijkspel!");
            blockBoard();
        }
    }

    function setValue(incomingValue) {
        // copy the old datas array
        let newArr = [...playArray]; 
        if (activePlayer === 1) {
            newArr[incomingValue] = "X";
        } else {
            newArr[incomingValue] = "O";    
        }
        setplayArray(newArr);
        setPlayerClassName(activePlayer === 2 ? ["active", "notActive"] : ["notActive", "active"])
        setActivePlayer(activePlayer === 1 ? 2 : 1);
        checkForWinnerOrDraw();
     }
    return (
    <>
        <section className="tictactoe">
            {winnerScreen()}
            <div className="default-button">
                {playAgain()}
            </div>
            <div className={'player ' + playerClassName[0]} >Speler X</div>
            <div className={'player ' + playerClassName[1]} >Speler O</div>
            <div className="ticButtonGrid">
            {createButtons()}
            </div>
        </section>
        <div className="default-button">
            <a href="/#projects">Terug</a>
        </div>

  </>
  )
}

export default Tic