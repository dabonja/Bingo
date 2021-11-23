import {render,screen,cleanup} from '@testing-library/react';
import RoundStart from '../components/RoundStart';
import { configure } from "enzyme";
import { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

//onClick

afterEach(()=>{
cleanup();
});


const num = 23;
const rNum = 2;
const color = "#00FF00";
const disabled = true;

describe('renders components correctly', ()=>{
  it("renders RoundStart component without crashing",()=>{
    const tree = renderer.create(<RoundStart />).toJSON();
    expect(tree).toMatchSnapshot();
  })


  it('renders header correctly',()=>{
      const wrapper = shallow(<RoundStart/>);
      const header =  <h1 className="display-4">Bingo</h1>;
      expect(wrapper.contains(header)).toEqual(true);

  })
})



test('round start should contain current number',()=>{
  render(<RoundStart currentNumber={num}/>);
  const start = screen.getByTestId("roundStart");

  expect(start).toBeInTheDocument();
  expect(num).toBe(23);
  expect(rNum).toBe(2);
  expect(color).toBe("#00FF00");
  expect(disabled).toBeTruthy();
  expect(disabled).not.toBeFalsy();

})
