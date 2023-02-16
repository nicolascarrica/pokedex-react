import { rest } from 'msw';
import { page1, page2 } from "./fixtures.js";
import bulbasaur from "./bulbasuar-fixture.js"

export const handlers = [
    rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) =>{
      const offsetNumber = req.url.searchParams.get('offset')
      let response;
        if (offsetNumber === '0') {
            response = page1;
        } else if (offsetNumber === '20'){
            response = page2;
        } else response = 'error'
      return res(
        ctx.json(response)
    );
    }),

    rest.get('https://pokeapi.co/api/v2/pokemon/:bulbasaur', (req, res, ctx) =>{
      const namePokemon = req.url.searchParams.get('bulbasaur');
      let response2;
      if (namePokemon === 'bulbasaur') {
        response2 = bulbasaur;
    } else response2 = "Error"
      return res(
        ctx.json(response2)
      );  
    })

]