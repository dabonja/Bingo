import {render,screen,cleanup} from '@testing-library/react';
import Combinations from '../components/Combinations';

afterEach(()=>{
cleanup();
});
const r = 1;
const combos = [{ numbers: [11,12], roundNumber: 1}];

test('should have combinations',()=>{
  render(<Combinations kombinacije={combos} round={r} />);

  const combosList  = screen.getByTestId("combosList");
  expect(combosList).toBeInTheDocument();
  expect(combos).toHaveLength(1);

  expect(r).toBe(1);
  combos.map( combo =>{
      expect(combo).toHaveProperty('numbers');
      expect(combo).toHaveProperty('roundNumber');
  })
})
