import {render,screen,cleanup} from '@testing-library/react';
import BingoList from '../components/BingoList';
import { mount } from 'enzyme';
import { configure } from "enzyme";
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
afterEach(()=>{
cleanup();
});
const numbers = [1,2,3,4,5,65,6];
const currentNumber = 12;

describe('accepts numbers and current number props', ()=>{

  const wrapper = shallow(<BingoList numbers={numbers} currentNumber={currentNumber}/>);

})



test('should render bingo balls with numbers', ()=>{

  render(<BingoList numbers = {numbers} currentNumber={currentNumber}/>);


/*

  const list = screen.getByTestId("bingo-1");
  expect(list).toBeInTheDocument();
  expect(numbers).toHaveLength(7);
  expect(currentNumber).toBe(12);
*/

})
