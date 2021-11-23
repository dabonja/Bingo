import {render,screen,cleanup} from '@testing-library/react';
import Winners from '../components/Winners';
/*
  Proveravam da li renderuje komponentu,
  Da li je prop validan
  Da li niz ima duzinu
  Da li prop sadrzi niz kao vrednost
*/
afterEach(()=>{
cleanup();
});
  const winners = [[11,12], [22,33]];

  describe('winners props is valid',()=>{

    it('winners prop has length of 2', ()=>{
          expect(winners).toHaveLength(2);
          expect(winners).not.toBeUndefined();
    })

    it('winners prop contains arrays',()=>{
          expect(winners).toEqual(expect.arrayContaining([[11,12],[22,33]]));
    })
  });

test(' winners should contains winning combinations', ()=>{
  render(<Winners winnerCombos={winners}/>);

  const winnersList = screen.getByTestId('winnersList');
  expect(winnersList).toBeInTheDocument();

})
