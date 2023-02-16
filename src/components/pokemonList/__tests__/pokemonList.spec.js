import { render, screen} from '@testing-library/react';
import PokemonList from '../PokemonList';

describe('Pokemon List test', () =>{
    

    test('verifica la carga de la lista de los pokemon', async () =>{
        render(<PokemonList />);

        const images = await screen.findAllByRole('img');
        expect(images).toHaveLength(20);

        const names = await screen.findByText("bulbasaur", "ivysaur","venusaur","charmander","charmeleon","charizard", "squirtle","wartortle","blastoise","caterpie","metapod","butterfree","weedle","kakuna","beedrill","pidgey","pidgeotto","pidgeot","rattata","raticate")
        expect(names).toBeInTheDocument();
    })

});