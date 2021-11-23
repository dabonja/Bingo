import React from 'react'
import { useState, useEffect,useRef } from 'react'
import BingoForma from './BingoForma'
import RoundStart from './RoundStart'
import BingoList from './BingoList'
import Combinations from './Combinations'
import Winners from './Winners';
import CombinationHistory from './CombinationHistory'

const Bingo = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48]

const allNumbers = [
{number: 1, color:'#ff0000'},{number: 2, color:'#00FF00'},{number: 3, color:'#0099cc'},{number: 4, color:'#b300b3'},{number: 5, color:'#8B4513'},
{number: 6, color:'#FFFF00'},{number: 7, color:'#FFA500'},{number: 8, color:'#000000'},{number: 9, color:'#ff0000'},{number: 10, color:'#00FF00'},
{number: 11, color:'#0099cc'},{number: 12, color:'#b300b3'},{number: 13, color:'#8B4513'},{number: 14, color: '#FFFF00'},{number: 15, color:'#FFA500'},
{number: 16, color:'#000000'},{number: 17, color:'#ff0000'},{number: 18, color:'#00FF00'},{number: 19, color: '#0099cc'},{number: 20, color:'#b300b3'},
{number: 21, color:'#8B4513'},{number: 22, color:'#FFFF00'},{number: 23, color:'#FFA500'},{number: 24, color:'#000000'},{number: 25, color:'#ff0000'},
{number: 26, color:'#00FF00'},{number:27, color:'#0099cc'},{number: 28, color:'#b300b3'},{number: 29, color:'#8B4513'},{number: 30, color:'#FFFF00'},
{number: 31, color:'#FFA500'},{number: 32, color:'#000000'},{number: 33, color:'#ff0000'},{number: 34, color:'#00FF00'},{number: 35, color:'#0099cc'},
{number: 36, color:'#b300b3'},{number: 37, color:'#8B4513'},{number: 38, color:'#FFFF00'},{number: 39, color:'#FFA500'},{number: 40, color:'#000000'},
{number: 41, color:'#ff0000'},{number: 42, color:'#00FF00'},{number:43, color:'#0099cc'},{number: 44, color:'#b300b3'},{number: 45, color:'#8B4513'},
{number: 46, color:'#FFFF00'},{number:47, color:'#FFA500'},{number: 48, color:'#000000'}]
    //crna '#000000'
    //zelena 	'#00FF00'
    //crvena '#ff0000'
    //zuta  '#FFFF00'
    //orange '#FFA500'
    //braon  '#8B4513'
    //plava  '#0099cc'
    //ljubicasta '#b300b3'


    const [currentNumber, setCurrentNumber] = useState(null);
    const [currentNumbers, setCurrentNumbers] = useState([]);
    const [win, setWin] = useState([]);
    const [inputVal, setInputVal] = useState(0);
    const [playerNumbers, setPlayerNumbers] = useState([]);
    const [combination, setCombination] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [round, setRound] = useState(1);
    const [kombinacije, setKombinacije] = useState([]);
    const [sveKombinacije, setSveKombinacije] = useState([]);
    const [match, setMatch] = useState({});
    const [allMatch, setAllMatch] = useState([]);
    const [color, setColor] = useState('');
    var interval;
    var count = 0;
    const inputEl = useRef(null);

    useEffect(() => {

    }, [currentNumber])

    useEffect(() => {
      let numeros = currentNumbers.map( item => item.number);

            let winners = combination.filter( item => {
              return checkWinner(item, numeros);
            })
          setAllMatch( prevState => [ ...prevState, ...winners])
    }, [round])

    useEffect(() => {

    }, [kombinacije])

    const setWinners = ()=>{

      let winners = combination.filter( item => {

        return checkWinner(item, currentNumbers);
      })

    setAllMatch( prevState => [ ...prevState, ...winners])


    }
    //
    const checkWinner=(arr1,arr2)=>{
      if(arr1.every( i => arr2.includes(i))){
        return arr1;
      }
    }

    //tested
    const contains = (a, obj) => {
        let i = a.length;
        while (i--) {
            if (a[i] === obj) {
                return true;
            }
        }
        return false;
    }

    const setKombinacijeState = () => {

        setKombinacije(prevState => [...prevState, { numbers: [...playerNumbers], roundNumber: round }])
    }

    //tested
    const getRandomNumber = () => {
        let obj = allNumbers[Math.floor(Math.random() * allNumbers.length)];
        var index = allNumbers.indexOf(obj);
        if (index !== -1) {
            allNumbers.splice(index, 1)
        }

        return obj;
    }

    //tested
    const getLength = (num) => {
        return num.toString().length;
        console.log(typeof num);
    }
    //pokrece interval i zaustavlja
    const setIntervalAndExecute = () => {
        //resetujem state objekte
        setCurrentNumber(prevState => prevState = null);
        setCurrentNumbers([]);

        var intervalCount = 0;
        interval = setInterval(() => {
            intervalCount += 1;

            var current = getRandomNumber();

            setCurrentNumbers(prevState => [...prevState, {number: current.number, color: current.color}])
            setCurrentNumber(prevState => prevState = current.number)
            setColor(prevState => prevState = current.color)
            //proveravam duzinu intervala
            if (intervalCount >=35) {

                clearInterval(interval)
                //setSveKombinacije(prevState => [...prevState, kombinacije])
                setRound(prevState => prevState + 1)
                setDisabled(false);
                setCombination([]);
                setColor(prevState => prevState = '')

            }
        }, 1500);
    }

    const handleStart = () => {

        if (combination.length === 0 && inputEl.current.value === '') {
            alert('Morate uneti kombinaciju');
        } else {
          setDisabled(true);
            setAllMatch([])
        //  setWin([]);
            setIntervalAndExecute();
        }
    }

    const handleCombination = () => {

        if (playerNumbers.length < 2) {
            alert('Morate uneti minimum 2 broja za kombinaciju!')
            setPlayerNumbers([]);
            return;
        } else if (playerNumbers.length >= 6) {
            alert('Mozete uneti maksimum 5 brojeva za kombinaciju!')
            setPlayerNumbers([]);
            return;
        } else {
            setCombination(prevState =>[...prevState, playerNumbers]);
            setKombinacijeState();
            setPlayerNumbers([])
            inputEl.current.focus();
        }
    }
    //tested
    const validateNumber = (num) => {
      inputEl.current.value = "";
          inputEl.current.focus();
        var a = getLength(num);
        if (a > 2) {
            alert('Dozvoljeni samo dvocifreni brojevi!')
            return;
        }

        if (num > 48) {
            alert('Broj ne moze biti veci od 48')
            return;
        }

        if (num === 0) {
            alert('Morate uneti broj!');
            return;
        }
        return num;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const n = validateNumber(inputVal);
        if (n !== undefined)
            if (!contains(playerNumbers, n)) {
                setPlayerNumbers(prevState => [...prevState, inputVal])
            }
    }

    const handleChange = (e) => {
        var t = parseInt(e.target.value);
        setInputVal(t);
    }

    return (
      <div className="grid-container">
          <BingoForma ref={inputEl} disabled={disabled} onSubmit={handleSubmit} onChange={handleChange} onClick={handleCombination} />
          <RoundStart onClick={handleStart} disabled={disabled} round={round} currentNumber={currentNumber} color={color} />
          <BingoList numbers={currentNumbers}  currentNumber={currentNumber}/>
          <Combinations playerCombinations = {kombinacije} round={round}/>
          <Winners winnerCombos = {allMatch}/>
          <CombinationHistory history ={kombinacije}/>
      </div>
    )
}
/*

*/

export default Bingo
