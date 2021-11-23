import React from 'react';
import renderer from 'react-test-renderer';
import Bingo from '../components/Bingo';
import {render,screen,cleanup} from '@testing-library/react';

afterEach(()=>{
  cleanup();
});




test('mock implementation of getLength function', ()=>{
  const mock = jest.fn((num)=> num.toString().length);
  expect(mock(32)).toBeGreaterThan(0);
})
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

describe('passed prop allNumbers should have properties',()=>{

    expect(allNumbers[0]).toHaveProperty('number', 1);
    expect(allNumbers[0]).toHaveProperty('color', '#ff0000');
})

test('mock getRandomNumber returns random number between 1 and 48',()=>{
  const mock = jest.fn(()=>{
    let obj = allNumbers[Math.floor(Math.random() * allNumbers.length)];
    var index = allNumbers.indexOf(obj);
    if (index !== -1) {
        allNumbers.splice(index, 1)
    }
    return obj;
  })

  mock();
  mock();
  expect(mock).toHaveReturnedTimes(2);
  expect(mock()).toBeInstanceOf(Object);
  expect(mock()).toHaveProperty('number');
  expect(mock()).toHaveProperty('color');
  expect(mock()).not.toBe(null);

});



const items =[ 1,2,3,4,5]
const otherItems = [2,3,7,9,0];
test('mock contains array has passed value',()=>{
const mock = jest.fn((a,obj)=>{  let i = a.length;
  while (i--) {
      if (a[i] === obj) {
          return true;
      }
  }
  return false
})
expect(mock (items, 3)).toBeTruthy();
expect(mock (items, 7)).toBeFalsy();
})


const checkWinner=(arr1,arr2)=>{
  if(arr1.every( i => arr2.includes(i))){
    return arr1;
  }
}


const validateNumber = (num) => {
  inputEl.current.value = "";
      inputEl.current.focus();
    var a = getLength(num);
    if (a > 2) {

        return;
    }

    if (num > 48) {

        return;
    }

    if (num === 0) {

        return;
    }
    return num;
}
test(' mock validateNumber', ()=>{
  const mock = jest.fn((num)=>{
    if(num > 2){
      return true;
    }
    if(num > 48){
      return false;
    }
    if(num === 0){
      return false;
    }
    return num;
  })

  expect(mock(2)).toBe(2);

})
